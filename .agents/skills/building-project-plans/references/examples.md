# Canonical Delivery Plan Examples

These reference examples demonstrate how `building-project-plans` produces project-agnostic, complete delivery plans across diverse project classifications.

---

## Example 1: Systems / CLI Tool (Greenfield, Non-Web)

### Project Brief
> "Build a fast, deterministic CLI tool `symsync` in Rust that scans two directory trees, computes BLAKE3 checksums for files, detects differences (added, deleted, modified, renamed), and outputs a JSON or human-readable patch manifest. Must support streaming file comparison without loading entire large files into memory. Target platforms: Linux and macOS."

---

### Rendered Plan

# symsync CLI — Complete Delivery Plan

## A. Planning / Architecture Decisions

### Decision 1: Directory Traversal & Concurrency Model
- **Context**: Large directory trees (100k+ files) must be traversed and hashed quickly without exhausting file descriptors or memory.
- **Options Considered**:
  1. Single-threaded recursive traversal.
  2. Thread pool (rayon) with work-stealing and channel-bounded hashing pipeline.
  3. Asynchronous Tokio runtime.
- **Selected Direction**: Multi-threaded traversal with `ignore` / `rayon` pipeline bounded by hardware thread count.
- **Reason**: Traversal and BLAKE3 hashing are CPU/IO bound; work-stealing avoids async runtime overhead while bounding memory consumption.
- **Constraints & Invariants**: Must stream files >16MB in chunks to cap heap memory at <100MB.
- **Affected Workstreams**: W1, W2.
- **Must Resolve Before**: Task 3 (Streaming hasher implementation).
- **Risk if Deferred**: High memory spikes or file descriptor exhaustion during large filesystem scans.

### Decision 2: File Rename Detection Heuristic
- **Context**: Detecting renames prevents treating a moved 10GB file as a deletion plus a full re-upload/re-copy.
- **Options Considered**:
  1. Exact BLAKE3 content hash matching across unmatched deletions and additions.
  2. Inode/device ID matching.
- **Selected Direction**: Two-tier detection: (1) Same inode/device where available, (2) exact BLAKE3 content match across remaining deleted and added files.
- **Reason**: Inode matching is instantaneous; content hash matching handles cross-filesystem renames accurately.
- **Constraints & Invariants**: Identical content with different paths must be flagged as a move, not a copy-delete.
- **Affected Workstreams**: W2.
- **Must Resolve Before**: Task 6 (Diff engine implementation).
- **Risk if Deferred**: Flawed diff manifests with duplicated transfer payloads.

---

## B. Task Inventory

### W0 — Specification & Test Harness
1. **Define Diff Manifest JSON Schema & Output Contract**
   - Priority: P0 | Dependencies: None | Blocks: 5, 8
   - Deliverable: Documented JSON schema and Rust serialization types for patch manifests.
   - Acceptance Criteria: Schema validates additions, deletions, modifications, and renames with file permissions.
   - Verification: Schema validation unit test passes against mock diff payloads.

2. **Create Synthetic Filesystem Fixture Generator**
   - Priority: P0 | Dependencies: None | Blocks: 4, 7
   - Deliverable: Test helper generating temporary directory trees with nested folders, symlinks, binary files, and permissions.
   - Acceptance Criteria: Generates deterministic test trees with known file content and structures.
   - Verification: Helper unit test validates generated tree against expected file count and hash checksums.

### W1 — Filesystem Scanner & Hashing Pipeline
3. **Implement Bounded Directory Walker**
   - Priority: P1 | Dependencies: None | Blocks: 4
   - Deliverable: Directory traversal module traversing directories while ignoring socket/FIFO special files.
   - Acceptance Criteria: Respects directory boundaries, traverses symlinks safely, handles permission errors gracefully.
   - Verification: Traversal test on 10,000-file synthetic fixture completes in <100ms.

4. **Implement Streaming BLAKE3 File Hasher**
   - Priority: P1 | Dependencies: 2, 3 | Blocks: 5
   - Deliverable: Chunked streaming hasher reading files in 64KB blocks.
   - Acceptance Criteria: Memory footprint remains <100MB even when processing a 2GB test file.
   - Verification: Memory benchmark test using a 2GB synthetic file asserts peak RSS <100MB.

### W2 — Diff Calculation & Manifest Generation
5. **Implement Tree Comparison & Modification Detector**
   - Priority: P1 | Dependencies: 1, 4 | Blocks: 6
   - Deliverable: Diff engine comparing two scanned file inventories to classify added, deleted, and modified paths.
   - Acceptance Criteria: Correctly tags path changes and modified file content.
   - Verification: Unit test comparing two directory states with known deltas asserts 100% classification accuracy.

6. **Implement Rename Detection Engine**
   - Priority: P1 | Dependencies: 5 | Blocks: 7
   - Deliverable: Rename matching pass resolving deleted-added pairs with identical content hashes into rename operations.
   - Acceptance Criteria: Moves and renames are identified without producing false duplicate modifications.
   - Verification: Test with 10 renamed files asserts exactly 10 rename operations in diff output.

7. **Implement JSON and Human-Readable Manifest Formatters**
   - Priority: P1 | Dependencies: 1, 6 | Blocks: 8
   - Deliverable: Formatting modules outputting JSON and CLI text tables with exit codes.
   - Acceptance Criteria: JSON output conforms to Task 1 schema; human output formats cleanly in standard terminal widths.
   - Verification: Snapshot tests comparing CLI output and JSON schema validation.

### W3 — CLI Packaging & End-to-End Validation
8. **Implement Clap CLI Interface with Flag Parsing**
   - Priority: P1 | Dependencies: 7 | Blocks: 9
   - Deliverable: CLI binary entrypoint parsing arguments (`symsync <src> <dest> [--json] [--dry-run]`).
   - Acceptance Criteria: Rejects missing paths with meaningful errors; returns exit code 0 on identical trees, 1 on differences.
   - Verification: CLI integration tests testing invalid inputs, missing paths, and help flags.

9. **Add Cross-Platform End-to-End Integration Suite**
   - Priority: P0 | Dependencies: 8 | Blocks: None
   - Deliverable: Automated integration test suite running full scans across edge cases (empty dirs, symlink loops, unicode names).
   - Acceptance Criteria: All E2E tests pass on Linux and macOS runners in CI.
   - Verification: `cargo test --test e2e` passes 100%.

---

## C. Sequencing

### Gates
- **Specification Gate (W0)**: Manifest schema and synthetic fixture generator must be complete before diff engine and CLI formatting.
- **Scanner Verification Gate**: Streaming hasher memory footprint (<100MB) must pass before diff engine integration.

### Execution Flow & Parallelization
```text
(W0: Tasks 1, 2)
      ↓
(W1: Task 3 → Task 4)
      ↓
(W2: Task 5 → Task 6 → Task 7)
      ↓
(W3: Task 8 → Task 9)
```

---

## Example 2: Zero-Downtime Database Migration (Existing System)

### Project Brief
> "Migrate an active production billing ledger in an existing PostgreSQL database from a single monolithic `transactions` table (500M rows) to partitioned tables by month, without downtime, read errors, or data loss. Zero downtime is non-negotiable."

---

### Rendered Plan

# Ledger Partitioning Migration — Complete Delivery Plan

## A. Planning / Architecture Decisions

### Decision 1: Partitioning Strategy & Primary Key Invariants
- **Context**: PostgreSQL requires declarative table partitions to include the partition key in all unique constraints and primary keys.
- **Options Considered**:
  1. Range partitioning on `created_at` (monthly).
  2. Hash partitioning on `account_id`.
- **Selected Direction**: Range partitioning on `created_at` monthly, with composite primary key `(id, created_at)`.
- **Reason**: Queries overwhelmingly filter by billing period; monthly range partitioning enables fast historical pruning.
- **Constraints & Invariants**: Existing external references relying on bare `id` must be preserved via backward-compatible view or application lookup layer.
- **Affected Workstreams**: W1, W2, W3.
- **Must Resolve Before**: Task 2 (Schema creation).
- **Risk if Deferred**: Inability to apply declarative partition constraints on live table.

### Decision 2: Dual-Writing vs. Change-Data-Capture (CDC) Backfill
- **Context**: 500M rows must be migrated while live transactions (1,500 writes/sec) continue uninterrupted.
- **Options Considered**:
  1. Trigger-based dual writing with asynchronous backfill.
  2. Application-level dual writing.
  3. Logical replication with PostgreSQL native CDC.
- **Selected Direction**: Database trigger-based dual writing into partitioned target, combined with chunked historical backfill in primary-key ranges.
- **Reason**: Trigger guarantees atomic write consistency without application deployment dependencies; backfill operates safely in background transactions.
- **Constraints & Invariants**: Critical Invariant: Zero duplicate ledger rows; zero lost transactions.
- **Affected Workstreams**: W2, W3.
- **Must Resolve Before**: Task 4 (Trigger implementation).
- **Risk if Deferred**: Data divergence between legacy and partitioned tables during migration.

---

## B. Task Inventory

### W0 — Current-State Audit & Validation Fixtures
1. **Audit Live Queries & Constraints on Legacy `transactions` Table**
   - Priority: P0 | Dependencies: None | Blocks: 2
   - Deliverable: Query audit report mapping active write/read queries, indexes, foreign keys, and replication lag.
   - Acceptance Criteria: All active queries and constraints documented with index utilization statistics.
   - Verification: Verification against PostgreSQL `pg_stat_user_tables` and `pg_stat_statements`.

2. **Establish Staging Shadow Database with Production Schema**
   - Priority: P0 | Dependencies: 1 | Blocks: 3, 5
   - Deliverable: Staging test database seeded with 10M rows of synthetic transactions matching production skew.
   - Acceptance Criteria: Replicates production indexes, data types, and transaction distribution.
   - Verification: Schema comparison script reports identical DDL between staging and production.

### W1 — Partitioned Schema & Dual-Write Layer
3. **Create Partitioned Target Tables & Monthly Partitions**
   - Priority: P0 | Dependencies: 2 | Blocks: 4
   - Deliverable: Migration script provisioning `transactions_partitioned` with 36 historical and 12 future monthly partitions.
   - Acceptance Criteria: Declarative partitions created with matching indexes, foreign keys, and default partition.
   - Verification: DDL migration executes successfully on staging; partition routing verified with test inserts.

4. **Implement Dual-Write Trigger on Legacy Table**
   - Priority: P0 | Dependencies: 3 | Blocks: 6
   - Deliverable: PostgreSQL row-level trigger replicating live INSERT/UPDATE/DELETE operations to partitioned table.
   - Acceptance Criteria: Trigger executes with <1ms overhead; handles upserts and conflict resolution safely.
   - Verification: Benchmark on staging asserts write latency overhead <5% under 2,000 writes/sec load.

### W2 — Historical Backfill & Reconciliation
5. **Implement Chunked Historical Backfill Script with Throttling**
   - Priority: P1 | Dependencies: 2, 4 | Blocks: 6
   - Deliverable: Python/Go background worker copying historical chunks (10,000 rows/batch) with adaptive sleep based on DB load.
   - Acceptance Criteria: Copies historical data without exceeding 15% DB CPU or 500ms replication lag.
   - Verification: Test backfill against 10M rows on staging; verify zero replica lag spikes.

6. **Implement Continuous Reconciliation & Checksum Verifier**
   - Priority: P0 | Dependencies: 4, 5 | Blocks: 7
   - Deliverable: Verification worker hashing row blocks across legacy and partitioned tables to identify mismatches.
   - Acceptance Criteria: Reports exact row count and MD5 checksum parity across all partitions.
   - Verification: Automated test deliberately injecting 5 row divergences; asserts reconciliation tool detects all 5.

### W3 — Cutover, Rollback Harness & Decommissioning
7. **Create Zero-Downtime View Cutover Script & Rollback Plan**
   - Priority: P0 | Dependencies: 6 | Blocks: 8
   - Deliverable: Atomic DDL transaction renaming tables and swapping `transactions` to an updatable view or target table.
   - Acceptance Criteria: Table swap executes in <50ms with exclusive table lock timeout set to 2 seconds; rollback reverses in <50ms.
   - Verification: Rehearsal in staging under active simulated traffic verifies zero dropped connections and zero failed transactions.

8. **Execute Cutover Rehearsal & Validate Production Readiness**
   - Priority: P0 | Dependencies: 7 | Blocks: None
   - Deliverable: Executed cutover runbook in staging environment with signed-off operational verification.
   - Acceptance Criteria: Reconciliation reports 100% data parity post-cutover under synthetic load.
   - Verification: Smoke tests execute 10,000 live reads and writes against post-cutover tables with 0 errors.

---

## C. Sequencing

### Gates
- **Data Integrity Gate (W2)**: Historical backfill and reconciliation checksum verification must achieve 100% parity before Cutover Task 7.
- **Rollback Rehearsal Gate**: Cutover and instantaneous rollback must be successfully rehearsed on staging under load before production execution.

### Execution Flow
```text
(W0: Task 1 → Task 2)
         ↓
(W1: Task 3 → Task 4)
         ↓
(W2: Task 5 ∥ Task 6)
         ↓
(W3: Task 7 → Task 8)
```
