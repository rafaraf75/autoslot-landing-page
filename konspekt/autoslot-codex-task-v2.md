# AutoSlot Landing Page — codex-task.md (v2, clean start)

## Project mode
We are **starting over from a clean template / clean project**.
Do **not** continue adapting the previous finance/mobile-app landing template.
Do **not** optimize for preserving old template structure.
Build a clean AutoSlot landing from scratch.

## Core goals
Build a multilingual landing page for AutoSlot that:
- targets workshop owners
- explains the workshop workflow clearly
- validates demand before deeper commercial rollout
- supports `es`, `pl`, `en`
- supports light/dark mode
- uses `shadcn/ui`
- feels visually aligned with the AutoSlot product language

## Mandatory stack
- Next.js 16
- App Router
- TypeScript
- Tailwind CSS
- `next-intl`
- `shadcn/ui`
- Lucide icons

## Important UI direction
Use clean `shadcn/ui` primitives where appropriate.
Buttons and compact controls should visually feel close to the AutoSlot UI reference:
- rounded / pill-like
- premium soft surfaces
- strong but elegant contrast
- subtle border depth
- beautiful hover/focus states

## Work style
Always work in small safe steps.
Before each implementation patch:
1. do a readonly audit / plan
2. list exact files to change
3. explain what will be done and what will NOT be touched
4. wait for approval if the step is larger than a tiny patch

After each patch respond with:
1. changed files
2. short report
3. key diff / important code fragments
4. build/lint/typecheck result if relevant
5. what remains intentionally untouched

## Non-goals
Do not add:
- fake testimonials
- fake logos
- app-store buttons
- meaningless stats section
- bloated enterprise pricing tables
- backend/database overengineering
- unnecessary animation complexity

---

# DELIVERY PLAN

## Task 00 — Clean project bootstrap audit
### Goal
Understand the fresh project structure before implementation.

### Do
- inspect the clean template/app structure
- identify current Next version, routing structure, Tailwind setup, available files
- confirm whether `shadcn/ui` is already installed
- propose minimal starting architecture for the landing

### Output
Provide:
- readonly audit
- exact files likely to be created/changed first
- recommendation for project structure

### Do not
- do not implement yet
- do not add marketing content yet

---

## Task 01 — Clean technical foundation
### Goal
Set up the correct technical base for the landing.

### Do
Create / configure the project foundation for:
- Next.js 16 App Router
- TypeScript
- Tailwind
- `next-intl`
- `shadcn/ui`
- clean folder structure for landing sections and UI primitives

Suggested direction:
- `app/[locale]/*`
- `messages/es.json`, `messages/pl.json`, `messages/en.json`
- `components/landing/*`
- `components/ui/*`
- `lib/i18n/*` or `src/i18n/*`

### Also do
- choose Spanish as default locale
- set up locale routing properly for current Next version
- ensure no deprecated conventions are introduced for the chosen Next version

### Output
Must report:
- exact files created/changed
- build result
- routing result

### Do not
- do not build final sections yet
- do not add final product copy yet

---

## Task 02 — Theme system and design tokens
### Goal
Create a robust light/dark foundation before section work.

### Do
- set up light/dark theme strategy
- ensure theme works cleanly with App Router
- tune base colors, surface tokens, borders, shadows
- prepare button/input/dropdown surface language inspired by AutoSlot UI screenshots

### Must include
- theme toggle component
- tasteful dark mode
- deliberate light mode

### Do not
- do not over-style every section yet
- do not implement full page copy yet

---

## Task 03 — Global shell
### Goal
Build the global page shell.

### Build
- localized root layout
- navbar
- footer
- container and section primitives
- locale switcher
- theme toggle

### Navbar must include
- AutoSlot wordmark/logo placeholder
- navigation anchors
- locale switcher
- theme toggle
- primary CTA

### Footer must include
- clean quick links
- CTA link
- minimal legal placeholder area if needed

### Do not
- do not build full hero content yet
- do not add forms yet

---

## Task 04 — Information architecture and page skeleton
### Goal
Set the final section order and create clean placeholder structure.

### Final section order
1. Hero
2. Problem
3. Solution Flow
4. Benefits
5. Audience
6. Product Preview
7. Pricing
8. Feedback / Waitlist / Demo
9. FAQ

### Do
- wire the page in the final order
- create section shells/components
- ensure anchors are correct
- ensure responsive spacing/layout is clean

### Do not
- do not add polished final copy to every section yet
- do not add backend logic yet

---

## Task 05 — Hero section
### Goal
Build the real AutoSlot hero.

### Must communicate
- what AutoSlot is
- who it is for
- core promise: easier booking and more order in the workshop
- real flow: visit -> estimate -> order -> invoice

### CTA options
Use a clear hierarchy such as:
- Request demo
- Join waitlist
- Leave feedback

### Visual guidance
- strong headline
- practical subheadline
- supportive visual/mockup/illustration
- not generic startup nonsense

### Do not
- do not use app-store CTA patterns
- do not use fake metrics

---

## Task 06 — Problem section
### Goal
Show real workshop pain points.

### Cover pain points like
- chaotic appointments
- unclear repair status
- scattered notes/messages/calls
- estimates not handled clearly before approval
- admin overhead before invoicing

### UX note
This section should feel like "yes, this is exactly my workshop problem".

---

## Task 07 — Solution Flow section
### Goal
Make the core workflow obvious.

### This is one of the most important sections.
Represent:
1. appointment / visit
2. estimate
3. repair order
4. invoice

### Recommended format
- 4 connected steps/cards
- each step with concise explanation
- visually ordered left-to-right or top-to-bottom on mobile

### Important
Do not change the order. Estimate comes before repair order.

---

## Task 08 — Benefits section
### Goal
Translate features into workshop outcomes.

### Focus on
- more order
- easier booking
- less chaos
- time saved
- better visibility
- smoother customer/workshop process

### Avoid
- feature dumping without outcomes

---

## Task 09 — Audience section
### Goal
Clarify who AutoSlot is for.

### Audience examples
- independent garages
- small and medium workshops
- owners who want better organization without bloated systems

### Tone
Reassuring, practical, not exclusive.

---

## Task 10 — Product Preview section
### Goal
Build trust with realistic product preview.

### Do
- show product screenshots/mockups/placeholders aligned to AutoSlot
- possibly use tabs/cards for key views:
  - calendar
  - estimate
  - work order
  - invoice

### Important
Keep this elegant and believable.
No fake analytics dashboards.

---

## Task 11 — Pricing section
### Goal
Present pricing simply and honestly.

### Must include
- from 49 EUR
- up to 5 bays / workstations

### Optional support text
- early access / feedback-first rollout
- simple onboarding tone

### Do not
- do not make enterprise complexity
- do not create 4-tier fake pricing tables

---

## Task 12 — Feedback / Waitlist / Demo section
### Goal
Create the main conversion section.

### Primary purpose
Collect market validation signals before bigger commercial commitments.

### Preferred options
- request demo
- join early access
- share workshop needs / feedback

### Suggested fields
- workshop name
- person name
- email
- country/language
- interest type
- optional message

### Important
Keep implementation practical and lightweight.
Do not overbuild backend.

---

## Task 13 — FAQ section
### Goal
Answer practical objections.

### FAQ topics
- who is it for
- online booking
- estimates before repair
- invoicing direction / tax-compliance readiness
- supported languages
- early access
- pricing basics

### Important
FAQ should help both users and SEO.

---

## Task 14 — Copy pass and localization pass
### Goal
Move from placeholders to real multilingual copy.

### Do
- move all user-facing text into translations
- ensure `es`, `pl`, `en` are complete
- keep copy natural in each language
- avoid direct machine-translation tone

### Important
No final hardcoded UI strings should remain.

---

## Task 15 — SEO and metadata
### Goal
Add clean search/AI discovery fundamentals.

### Do
- localized metadata
- titles and descriptions
- semantic headings
- OG basics if appropriate
- clean structured content where useful
- FAQ structure that helps discoverability

### Avoid
- keyword stuffing
- spammy SEO language

---

## Task 16 — Responsive polish and accessibility
### Goal
Make the landing feel premium on all screens.

### Must verify
- mobile layout
- tablet layout
- desktop layout
- buttons and dropdowns
- keyboard focus states
- theme contrast
- locale switcher usability

---

## Task 17 — Final QA and cleanup
### Goal
Deliver a stable v1 landing.

### Verify
- dev works
- build works
- routing works
- all locales work
- light/dark works
- no dead anchors
- no leftover template artifacts
- no hardcoded finance/app-store copy

### Final output
Report:
- changed files
- final architecture summary
- what is production-ready
- what remains intentionally out of scope

---

# Implementation guardrails

## Guardrail 1
Do not make large uncontrolled design changes beyond the current task.

## Guardrail 2
Do not introduce backend/database complexity unless explicitly required for the feedback form.

## Guardrail 3
Use `shadcn/ui` when helpful, but do not blindly over-componentize simple sections.

## Guardrail 4
Keep all work aligned with the real AutoSlot product logic and the workshop audience.

## Guardrail 5
When unsure between flashy and practical, choose practical.

## Guardrail 6
Every patch should leave the project in a buildable, reviewable state.
