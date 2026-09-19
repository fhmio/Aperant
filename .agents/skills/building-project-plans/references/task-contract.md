# Task & Workstream Contract

This document specifies the decomposition rules, naming standards, sizing heuristics, and lifecycle contracts for tasks and workstreams.

---

## 1. The Atomic Task Rule

> **One task = one independently verifiable delivery unit.**

### What Makes a Task Atomic?
1. **Single Focus**: It produces a cohesive deliverable (an interface, a schema migration, an engine component, a test suite).
2. **Independently Verifiable**: An engineer or automated harness can verify that the task meets its acceptance criteria without waiting for unrelated future tasks.
3. **Bounded Context**: It can be executed and reviewed in a focused session.

### Anti-Pattern: Oversized Tasks
- ❌ `Build backend, database, authentication and deployment`
- ❌ `Modernize legacy system and migrate all customer data`
- ❌ `Implement frontend application`

### Anti-Pattern: Over-Fragmented Tasks
- ❌ `Create empty file user_service.go`
- ❌ `Add import statement for database driver`
- ❌ `Fix typo on line 42`

### Proper Atomic Decomposition
- ✅ `Define User persistence interface and memory repository`
- ✅ `Implement PostgreSQL User repository with connection pooling`
- ✅ `Implement user authentication handler and session token generation`
- ✅ `Add integration tests verifying password hashing and invalid credential rejection`

---

## 2. Global Continuous Numbering

Task IDs must be strictly continuous integers starting at `1` and incrementing through `N` across the entire document.

```text
Correct:
W0 — Architecture & Design
1. Define API schema contract
2. Establish database migration strategy

W1 — Foundation & Core Engine
3. Implement core state machine
4. Add state transition unit tests

W2 — Persistence
5. Implement disk-backed write-ahead log
6. Add crash recovery tests

Incorrect (FORBIDDEN):
W0
1. Task
2. Task

W1
1. Task  <-- VIOLATION: Never reset task numbers per workstream!
2. Task
```

**Why**: Unambiguous referencing. A dependency declared as `Depends on Task 5` points to a single, immutable task regardless of which workstream it lives in.

---

## 3. Action-Oriented Task Titles

Task titles must begin with a strong, unambiguous imperative verb and name the concrete deliverable.

### Approved Action Verbs
`Define`, `Implement`, `Create`, `Migrate`, `Configure`, `Integrate`, `Validate`, `Add`, `Document`, `Deploy`, `Verify`, `Remove`, `Refactor`, `Extract`, `Benchmark`, `Provision`, `Audit`.

### Rejected Vague Titles
- ❌ `Backend` (Vague noun phrase)
- ❌ `Security stuff` (No clear boundary)
- ❌ `Database work` (Unclear deliverable)
- ❌ `Fix things` (No stated failure mode)
- ❌ `Testing` (Detached from subject under test)
- ❌ `Setup project` (Unclear what is provisioned)

---

## 4. Priority Assignment Model

Priority is determined by architectural dependency, risk, security, and correctness—never by prompt order or convenience.

| Level | Classification | Definition & Criteria |
|---|---|---|
| **P0** | **Critical / Blocker** | Blocks downstream work, ensures data integrity, prevents security vulnerabilities, establishes core architecture, or enforces critical invariants. |
| **P1** | **Core Capability** | Delivers primary functional requirements and non-negotiable deliverables. |
| **P2** | **Supporting Capability** | Secondary features, operational utilities, observability tooling, automated helpers. |
| **P3** | **Polish / Optional** | Performance micro-optimizations, cosmetic improvements, developer experience enhancements, optional documentation. |

---

## 5. Dependency & Gate Classification

Dependencies must represent physical, technical, or logical necessities, not arbitrary personal preferences.

```text
Dependency Types
├── Hard Dependency       → Task B cannot physically compile, run, or exist without Task A's deliverable.
├── Soft / Logical Dep    → Task B logically benefits from Task A's patterns or conventions.
├── Gate Dependency       → Downstream workstream blocked until gate verification criteria pass.
├── External Dependency   → Blocked by third-party vendor API, legal clearance, or external team approval.
└── Parallel-Safe         → Independent deliverable units sharing no incomplete artifacts; safe for concurrent execution.
```

---

## 6. Verification Placement & Invariant Protection

### Rule: Test Alongside the Work It Protects
Do **not** dump all testing into a single final workstream.
- Unit and integration tests belong in the same workstream (and often paired directly with) the implementation task.
- Schema migrations must pair with migration validation and rollback tests.
- High-concurrency routines must pair with race detection or load tests.

### Final Hardening Workstream (`Wn`) Scope
The final workstream (`Wn — Hardening & Release Verification`) is reserved exclusively for:
1. Cross-domain end-to-end user journeys.
2. Full system regression test runs.
3. System-wide load, stress, or soak tests.
4. Security and vulnerability audits.
5. Operational cutover rehearsals and smoke tests.

---

## 7. Quality Gates for Task Inventory

Before a plan is finalized, audit the inventory against these checks:
1. **Duplicate Check**: Are there duplicate or semantically overlapping tasks across workstreams?
2. **Traceability Check**: Does every requirement in scope map to at least one task?
3. **Justification Check**: Does every task trace back to a legitimate requirement, risk, or invariant?
4. **Scope Protection Check**: Did any unrequested features or architectural redesigns creep in? If so, remove them.
