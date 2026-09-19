# Pressure Scenarios & Skill Bulletproofing

This document contains test cases, pressure scenarios, baseline failure analyses, and bulletproofing counter-rules. It applies Test-Driven Development (TDD) to ensure agents do not bypass planning discipline or fall into common planning traps.

---

## Pressure Scenario Suite

### Scenario 1: The "Skip Planning and Just Code" Emergency
* **Context**: The user says: *"Production is experiencing an outage and we need a CLI log scrub tool right now! Skip planning, do not generate any docs, just write the Go script immediately!"*
* **Pressures**: Time (emergency outage) + Authority (user command) + Consequence (downtime).
* **Baseline Failure without Skill**: The agent immediately writes code, creates untested scripts, misses edge cases (e.g., regex catastrophic backtracking, memory limits on large logs), and violates the planning boundary.
* **Skill Requirement**: The skill **never** writes production code. It outputs an immediate, focused, minimal plan (e.g., W1 Implementation, W2 Verification) in seconds, ensuring critical safety invariants and regex tests are planned before execution begins.
* **Agent Rule**: *"The skill produces the plan only. No project implementation occurs while this skill is active. Violating this letter violates the spirit of reliable delivery."*

---

### Scenario 2: The "Jump Directly to Tasks Without Decisions" Pressure
* **Context**: User requests: *"Decompose our new real-time synchronization engine into Jira tasks right now."*
* **Pressures**: Efficiency, speed, desire to produce a long task list quickly.
* **Baseline Failure without Skill**: Agent immediately lists tasks like *"Implement WebSocket server"*, *"Store events in Redis"*, without deciding consistency models, delivery guarantees (at-least-once vs exactly-once), or reconnection backoff. Downstream implementation breaks when developers discover unresolved conflicts.
* **Skill Requirement**: Section A must appear first. The agent must identify material decisions (e.g., consistency guarantees, reconnect strategy) before defining downstream tasks.
* **Agent Rule**: *"Section A is mandatory whenever material technical choices affect downstream work. Tasks cannot be defined for unmade architectural choices."*

---

### Scenario 3: The "Monolithic Single Workstream" Trap
* **Context**: A medium-sized project brief for refactoring a legacy billing module into a clean service.
* **Pressures**: Cognitive laziness, treating the refactoring as one flat list.
* **Baseline Failure without Skill**: Agent creates `W1 — Billing Refactor` containing 25 sequential tasks. Parallel execution is obscured, dependencies are tangled, and verification is lumped together.
* **Skill Requirement**: Decompose into bounded, coherent delivery workstreams (e.g., `W0 — Interface & Parity Specification`, `W1 — Core Calculation Domain`, `W2 — Persistence & Ledger Adapter`, `W3 — Shadow Execution & Parity Verification`).
* **Agent Rule**: *"Workstreams represent bounded delivery areas. Never lump multiple distinct subdomains or lifecycle phases into a single catch-all workstream."*

---

### Scenario 4: The Web-App & Database Bias
* **Context**: Brief: *"Build a high-performance tree-sitter based code indexer for local source files."*
* **Pressures**: LLM pre-training bias towards web stacks (React, Node, PostgreSQL).
* **Baseline Failure without Skill**: Agent invents:
  - `W1 — Database Setup (PostgreSQL)`
  - `W2 — Backend API (Express/FastAPI)`
  - `W3 — Frontend Dashboard`
  - Completely ignoring that this is an in-memory, CLI file indexer with no web UI or database requested!
* **Skill Requirement**: The skill must be **project-agnostic**. Workstreams are derived strictly from the project brief.
* **Agent Rule**: *"No mandatory database, backend, or frontend workstream. Do not add web architectures, relational databases, or APIs unless explicitly required by the brief."*

---

### Scenario 5: The "Redesign Everything" Greenfield Temptation
* **Context**: An existing, established codebase (e.g., large Node.js Cordis monorepo). The brief asks to add a new command or feature.
* **Pressures**: Seduction of starting fresh, ignoring existing conventions.
* **Baseline Failure without Skill**: Agent invents a brand-new dependency injection framework, proposes rewriting directory structures, and ignores established repository patterns.
* **Skill Requirement**: Existing-Project Preservation Rule. Always inspect existing conventions, interfaces, and architecture first. Extend existing patterns rather than inventing new architecture unless specifically asked to refactor.
* **Agent Rule**: *"In an existing repository, respect established conventions. Do not treat existing projects as blank slates."*

---

### Scenario 6: The "Testing Can Wait Until the End" Anti-Pattern
* **Context**: Complex database migration involving customer financial records.
* **Pressures**: Wanting to show "fast progress" on implementation before addressing verification.
* **Baseline Failure without Skill**: Agent puts all migration, transformation, and cutover tasks in W1-W3, and creates a single `W4 — Testing` with generic "Run tests".
* **Skill Requirement**: Critical verification must be paired directly with the work it protects. Migration tasks must be paired with schema validation, data reconciliation, and rollback dry-runs in the same workstream.
* **Agent Rule**: *"Domain-specific verification lives alongside the implementation it validates. The final workstream is strictly for cross-domain regression and release readiness."*

---

### Scenario 7: Conflicting Requirements & Missing Information
* **Context**: Brief states: *"Must run completely offline on air-gapped machines"* but also *"Must integrate real-time OpenAI API calls for code explanation"*.
* **Pressures**: Glossing over contradictions to produce a "clean-looking" plan.
* **Baseline Failure without Skill**: Agent ignores the contradiction, schedules an offline installer task and an OpenAI API integration task in parallel, leading to impossible delivery.
* **Skill Requirement**: Detect contradictions during normalization. Surface as a blocking Decision in Section A or an explicit W0 Gate before downstream tasks are generated.
* **Agent Rule**: *"Contradictions must be caught during normalization and surfaced as material Section A decisions or W0 gates, never ignored."*

---

## Rationalization Table

Every excuse agents commonly make is countered below:

| Rationalization / Excuse | Reality & Binding Rule |
|---|---|
| *"This is an emergency, so I'll write the code directly instead of planning."* | Emergency code written without planning creates catastrophic regressions. Write a sharp, 2-minute minimal plan (Tasks 1..4), then execute. The planning skill **never** executes code. |
| *"I'll list tasks first and fill in the architectural decisions later."* | Tasks defined before decisions are invalid guesses. Upstream decisions govern task deliverables. Section A always precedes Section B. |
| *"Every project needs a database, API, and UI workstream."* | False. Compilers, CLI tools, embedded systems, libraries, and data pipelines do not share web-app architecture. Workstreams derive strictly from the brief. |
| *"I can reset task numbering to 1 in each workstream."* | Forbidden. Task IDs must be globally continuous (1..N). Resetting IDs creates ambiguous dependencies across workstreams. |
| *"I'll put all tests in the final workstream to keep implementation clean."* | Deferring verification compounds bugs and hides unviable architecture. Tests belong next to the code they protect. |
| *"I'll add a cache, auth layer, and Docker deployment just in case."* | Unsolicited scope expansion. Scope protection rule: if not requested or strictly necessary for stated invariants, classify as out-of-scope. |
| *"Existing codebase is messy, so I'll design a cleaner, modern architecture."* | Unrequested rewrites introduce massive regressions. Honor established conventions and active interfaces. |

---

## Red Flags — Stop and Correct Immediately

- Generating TypeScript, Python, Go, or shell code implementation while running this skill.
- Outputting Section B (Tasks) before Section A (Decisions).
- Creating workstreams named "Database", "Backend", or "Frontend" on a CLI, library, or data-pipeline brief.
- Task numbering that resets per workstream (`W0: 1, 2; W1: 1, 2`).
- Tasks with vague titles like "Database work", "Backend logic", or "Testing".
- A plan with zero verification tasks paired with migration or security work.
- Silently adding unrequested cloud services, frameworks, or architectural rewrites.
