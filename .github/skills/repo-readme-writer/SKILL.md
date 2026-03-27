---
name: repo-readme-writer
description: "Create or rewrite a detailed, easy-to-navigate repository README.md. Use when documentation is sparse, onboarding is slow, or project structure/commands need clear explanation. Includes repo analysis, section planning, architecture mapping, and quality checks."
argument-hint: "Optional: target audience, README style, sections to include/exclude"
user-invocable: true
---

# Repository README Writer

Generate a complete, structured, and navigable `README.md` for the current repository.

## When to Use
- Existing README is template-like, outdated, or missing project-specific guidance.
- New contributors cannot quickly understand structure, setup, and workflows.
- You need a standardized README that supports onboarding and maintenance.

## Inputs To Ask For (If Missing)
- Primary audience: maintainers, new contributors, or external integrators.
- Preferred tone: concise, technical, or beginner-friendly.
- Must-have sections and prohibited sections.
- Whether badges/changelog/contributing/deployment details should be included.

## Current Defaults For This Team
- Scope: workspace and personal reuse.
- Audience: maintainers.
- Tone: technical and concise.
- Mandatory sections: badges, screenshots, architecture deep dive, and FAQ/troubleshooting.

## Workflow
1. Inspect the repository shape.
2. Infer runnable commands from package/build files.
3. Map architecture and important directories for navigation.
4. Draft README sections in a logical order.
5. Fill each section with accurate, repository-specific details.
6. Run quality checks and tighten wording.
7. Replace or update `README.md`.

## Detailed Procedure

### 1. Discover Repository Context
- Read root files such as `README.md`, `package.json`, lock/config files, and app entry files.
- Identify framework/runtime/build tools (for example: Vue, Vite, Node engine, lint/format scripts).
- Capture concrete facts only from repository contents; avoid assumptions.

### 2. Build A Navigation Map
- Summarize key folders with one-line purpose statements.
- Highlight entry points and feature components.
- Prefer a short tree plus explanatory bullets over dumping the full filesystem.

### 3. Derive Operational Commands
- Extract install, dev, build, preview, lint, test, and format commands from scripts.
- Include prerequisites (Node version, package manager, environment variables if present).
- If multiple ways exist, present one recommended path first.

### 4. Compose README Structure
Use this default section order (adapt when needed):
1. Project Title + One-paragraph Summary
2. Why This Project Exists (or key value proposition)
3. Badges
4. Table of Contents
5. Tech Stack
6. Screenshots
7. Project Structure (navigable map)
8. Architecture Deep Dive
9. Prerequisites
10. Quick Start
11. Available Scripts / Commands
12. Development Workflow
13. Deployment or Build Output Notes
14. FAQ / Troubleshooting
15. Contributing (if appropriate)
16. License (if known)

### 5. Decision Points And Branching
- If monorepo detected: include workspace/package matrix and per-package commands.
- If single app repo: keep structure focused on top-level app architecture.
- If tests exist: add dedicated testing section with command and scope.
- If no tests exist: explicitly state that tests are not configured yet.
- If env vars are required: document setup with `.env.example` if available.
- If deployment target is unknown: describe build artifacts and leave deployment as "project-specific".

### 6. Quality Criteria (Must Pass)
- Every command shown is executable as written in this repo.
- Folder descriptions match actual paths and purposes.
- README includes a clickable table of contents.
- README includes badges and screenshots when applicable.
- README includes a concise architecture deep-dive section.
- No placeholder text (for example, "TODO", "lorem ipsum", "template").
- Avoid generic boilerplate language; favor concrete project facts.
- Keep section headings stable and scannable.

### 7. Completion Checklist
- `README.md` updated with complete structure.
- New contributor can answer: what this is, how to run it, where code lives, and how to build/lint.
- Terminology is consistent with repository naming.
- Markdown renders cleanly in GitHub.

## Output Requirements
- Output file: `README.md`
- Writing style: direct, practical, and navigable.
- Include short code blocks for commands.
- Use relative links for internal section navigation.

## Optional Template
Use [README template](./assets/README.template.md) as a starting scaffold, then replace placeholders with repository-specific details.
