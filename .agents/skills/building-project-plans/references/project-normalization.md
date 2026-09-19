# Universal Project Normalization Model

Before generating planning decisions, workstreams, or tasks, the planner must normalize the project brief into a structured internal representation. This ensures comprehensive requirement discovery, eliminates ambiguities, and prevents accidental assumptions.

---

## 1. Universal Extraction Schema

The planner extracts supported facts into these normalized fields. No field is artificially forced; fields without source evidence remain empty or marked unstated.

| Field | Description & Extraction Guideline |
|---|---|
| `PROJECT_GOAL` | Core objective and value proposition of the project. |
| `PROJECT_TYPE` | Primary delivery classification (see Project Classification below). |
| `CURRENT_STATE` | Existing architecture, interfaces, repositories, schemas, or active constraints. |
| `TARGET_STATE` | Intended post-delivery architecture, operational status, and capabilities. |
| `IN_SCOPE` | Explicit capabilities, systems, components, and deliverables to be built or modified. |
| `OUT_OF_SCOPE` | Explicitly excluded capabilities, future phases, or untouched legacy systems. |
| `FUNCTIONAL_REQUIREMENTS` | What the system/software must do (behaviors, endpoints, workflows, business logic). |
| `NON_FUNCTIONAL_REQUIREMENTS` | Performance, latency, throughput, reliability, accessibility, and scalability targets. |
| `DELIVERABLES` | Concrete artifacts produced (code, documents, configs, migrations, evaluation suites). |
| `BUSINESS_RULES` | Domain invariants, regulatory boundaries, financial logic, and permission models. |
| `TECHNICAL_RULES` | Architectural mandates, platform standards, language policies, and library restrictions. |
| `CONSTRAINTS` | Non-negotiable limits: timeframes, environments, backward compatibility, budget. |
| `PREFERENCES` | Desired but negotiable options (e.g., preferred tooling, optional helpers). |
| `SECURITY_REQUIREMENTS` | Authentication, authorization boundaries, cryptographic standards, secret handling. |
| `COMPLIANCE_REQUIREMENTS` | Regulatory, audit, privacy, or legal rules (e.g., GDPR, HIPAA, SOC2). |
| `DATA_REQUIREMENTS` | Data models, storage types, consistency models, retention, schemas, migrations. |
| `INTEGRATION_REQUIREMENTS` | Third-party services, internal microservices, message buses, API contracts. |
| `OPERATIONAL_REQUIREMENTS` | Telemetry, logging, metrics, monitoring, alerting, debugging, health checks. |
| `DEPLOYMENT_REQUIREMENTS` | CI/CD pipelines, containerization, staging environments, release gates. |
| `INVARIANTS` | Conditions that MUST NEVER be violated throughout implementation or runtime. |
| `ACCEPTANCE_CRITERIA` | Verifiable conditions for marking the initiative or project complete. |
| `KNOWN_DECISIONS` | Choices already made and locked by stakeholders or established architecture. |
| `OPEN_DECISIONS` | Choices requiring resolution before downstream implementation can begin. |
| `EXTERNAL_DEPENDENCIES` | Systems, teams, approvals, or assets outside the direct control of the delivery team. |
| `RISKS` | Potential failure modes, data-loss vectors, delivery bottlenecks, or security holes. |
| `EXISTING_PROJECT_CONTEXT` | Conventions, patterns, active interfaces, and test suites in the target repository. |

---

## 2. Project Classification Matrix

Classify the project before decomposition to determine planning priorities.

```text
Project Classification
├── Greenfield                  → Foundation, bootstrap, architecture consensus, initial toolchain
├── Existing-System Enhancement → Preserve conventions, extend interfaces, backward compatibility
├── Bug/Repair Program          → Root-cause investigation, regression harness, minimal delta
├── Migration                   → Current-state audit, parallel runs, data reconciliation, rollback plan
├── Replacement                 → Feature parity verification, shadow execution, cutover strategy
├── Integration                 → Interface contracts, mock environments, failure isolation, retries
├── Modernization / Refactor    → Test harness first, incremental extraction, invariant preservation
├── Infrastructure / DevOps     → Idempotency, least privilege, zero-downtime, disaster recovery
├── Data Engineering            → Lineage, idempotent pipelines, schema validation, data reconciliation
├── AI / ML Systems             → Data quality, model evaluation benchmarks, latency gates, fallback paths
├── Operational Project         → Runbooks, incident workflows, observability, alerting thresholds
└── Multi-System Program        → System boundary partitioning, inter-project dependency graph
```

---

## 3. Contradiction & Ambiguity Detection

If the project brief contains conflicting directives (e.g., "Zero-latency in-memory cache" vs. "Absolute persistence on every write", or "Single monolithic binary" vs. "Independent microservices"):

1. **Flag Immediately**: Identify the conflicting requirements explicitly.
2. **Elevate to Section A (Decision)**: Formulate the conflict as an open planning decision with explicit options and tradeoffs.
3. **Guard Downstream Work**: Do not generate implementation tasks for conflicting areas until the decision is framed with a proposed direction.

---

## 4. Unknown Information Handling

Missing information must be classified systematically rather than stalling the entire planning process:

```text
Unknown Information
├── BLOCKING                 → Halts specific workstream; framed as Decision or W0 Gate
├── DECISION_REQUIRED        → Material choice needing technical selection; goes to Section A
├── EXTERNAL_CONFIRMATION    → Awaits third-party input; tagged as External Dependency
├── SAFE_ASSUMPTION          → Industry standard or low-risk extension; document assumption explicitly
└── NON_BLOCKING             → Minor detail deferred to local task implementation
```

*Rule*: A non-blocking unknown must **never** block generating the rest of the delivery plan.

---

## 5. Scope Scaling Heuristics

### Scaling Down (Small Initiatives)
Do not invent ceremony or bloated workstreams for simple or focused projects.
- A 3-task bug fix or minor feature may only need 2 workstreams:
  - `W1 — Implementation`
  - `W2 — Verification & Regression`
- Section A contains only decisions with genuine architectural or behavioral impact; omit Section A if all choices are trivial or pre-decided.

### Scaling Up (Multi-System Programs)
If a brief describes multiple distinct systems (e.g., "Payment Engine, Mobile App, Analytics Pipeline, and Partner Portal"):
1. Establish a **Program Partition**:
   - Shared Infrastructure / Common Contracts
   - System A Delivery
   - System B Delivery
   - Cross-System Integration & End-to-End Verification
2. Keep task numbering globally continuous across the entire program.
3. Map cross-system dependencies explicitly (e.g., `Task 42 in System B depends on Task 15 in System A`).
