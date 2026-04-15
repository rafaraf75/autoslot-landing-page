# AutoSlot Landing Page — agent.md (v2, clean start)

## 1) Mission
Build a high-conviction multilingual marketing landing page for **AutoSlot**, a SaaS for small car repair workshops/garages.

The goal is **not** to build a generic startup landing page. The goal is to validate demand before deeper commercial commitments (fiscal integrations, subscription stack, contracts) and collect real market feedback from workshop owners.

This landing page must feel:
- trustworthy
- practical
- premium but not corporate-cold
- automotive/workshop-oriented
- clear for non-technical garage owners
- fast, clean, and mobile-first

Primary market focus:
- Spain first
- Polish and English also supported

Languages required from the start:
- `es`
- `pl`
- `en`

## 2) Product context
AutoSlot is a workshop management SaaS for garages. Core value proposition:
- more order in the workshop
- easier booking and organization
- one flow from customer visit to estimate to repair order to invoice
- less chaos, less missed information, less manual back-and-forth
- more time thanks to online booking and better process visibility

The real workshop flow should be reflected in the landing page. The logical sequence is:
1. visit / appointment
2. estimate / quote
3. repair order / work order
4. invoice

This ordering matters and should shape both copy and visual storytelling.

## 3) Primary audience
Main audience:
- owners of small and medium independent car workshops
- workshop managers
- people already running repairs and paperwork manually or semi-manually

Secondary audience:
- people interested in automotive business tools
- garages curious about modern customer booking / workshop process software

The page should speak to workshop owners in plain business language, not startup jargon.

## 4) Main business goal of the landing page
The page should help answer:
- do workshop owners react positively to the offer?
- do they understand the value quickly?
- would they want a demo?
- would they join a waitlist?
- would they leave feedback?
- does the price feel acceptable?

Primary conversions:
1. request a demo
2. join waitlist / early access
3. leave feedback / interest

Optional micro-conversions:
- click pricing
- click FAQ
- scroll to workflow
- interact with product preview

## 5) Positioning
The landing page should sell this promise:

**"Easier booking and more order in the workshop."**

Secondary support:
- one process from visit to invoice
- estimates before repair decision
- online bookings save time
- invoicing ready for local tax/compliance direction
- built with real workshop logic in mind

## 6) Pricing context
Pricing should be present and honest.
Current anchor:
- **from 49 EUR**
- for **up to 5 bays/lifts / workstations**

We are not hiding the price. We are validating whether the market accepts it.

Tone of pricing:
- simple
- credible
- not overloaded with enterprise comparison tables
- one main pricing card is enough for v1

## 7) Design direction
Build from a **clean template / clean app**, not by modifying a generic finance/mobile-app landing page.

Tech stack target:
- Next.js 16
- App Router
- TypeScript
- Tailwind CSS
- `next-intl`
- `shadcn/ui`
- Lucide icons

Use `shadcn/ui` for consistent primitives where helpful.

Visual direction:
- premium dark/light theme
- automotive / workshop atmosphere
- modern SaaS feel, but practical
- avoid "crypto", "finance", or app-store visual language
- avoid generic startup gradients if they feel fake
- clean, strong spacing, excellent readability
- subtle industrial / workshop tone

### Important visual reference
Buttons and top-level controls should feel close to the AutoSlot UI language shown in the provided screenshots:
- pill / rounded-xl / rounded-2xl feeling
- dark glassy / soft surface in dark mode
- elegant outline and subtle inner depth
- minimal but premium
- clear hover / active states
- not cartoonish
- not overly glossy

Use this design language as inspiration for:
- primary buttons
- secondary buttons
- segmented controls
- language switcher
- theme switcher
- small topbar controls

Do **not** copy the app shell itself into the landing page. Reuse only the UI feel.

## 8) UX principles
- mobile-first
- high readability
- obvious CTA hierarchy
- every section must answer a real workshop-owner question
- no filler sections
- no fake logos
- no fake testimonials unless clearly marked as placeholder and approved
- no app store buttons
- no meaningless stats section
- no clutter

The page should feel convincing even without video.

## 9) Required sections (v1)
Target structure:
1. Navbar
2. Hero
3. Problem
4. Solution Flow
5. Benefits
6. Audience / Who it is for
7. Product Preview
8. Pricing
9. Feedback / Waitlist / Demo CTA
10. FAQ
11. Footer

### Section intent
#### Navbar
Must include:
- AutoSlot logo / wordmark
- anchor navigation
- language switcher
- theme toggle
- primary CTA

#### Hero
Must communicate fast:
- what AutoSlot is
- who it is for
- why it matters
- that the workflow goes from visit to estimate to order to invoice

Hero CTA options:
- Request demo
- Join waitlist
- Leave feedback

#### Problem
Show real workshop pain points such as:
- chaos in appointments
- unclear status of jobs
- no clean flow from customer request to billing
- wasted time on calls/messages/manual notes
- estimates handled separately or not clearly

#### Solution Flow
This section is critical.
Show the actual workshop logic:
- appointment / visit
- estimate
- repair order
- invoice

Possibly as 4 connected cards/steps.
This is not decorative. It is one of the strongest product explanation sections.

#### Benefits
Focus on outcomes:
- more order in the workshop
- easier booking
- fewer missed details
- smoother front-desk flow
- time savings with online booking
- one place for process visibility

#### Audience
Explain who it is for:
- small garages
- independent workshops
- workshops wanting better organization without bloated ERP complexity

#### Product Preview
Show realistic screenshots/mockups/previews of AutoSlot.
Preview should support trust.
Do not overcomplicate with sliders unless done very well.
Possible tabs:
- calendar
- estimate
- work order
- invoice

#### Pricing
Simple.
Main message:
- from 49 EUR
- up to 5 bays

Can mention that the product is being opened with early-access / feedback-first approach.

#### Feedback / Waitlist / Demo
This section matters a lot.
It should collect signals before full commercial rollout.
Need clear CTA options such as:
- request demo
- join early access
- tell us what your workshop needs

#### FAQ
Should answer practical workshop-owner questions, e.g.:
- Is this for small workshops?
- Does it support estimates before repair?
- Can customers book online?
- What about invoicing / local requirements?
- Is this already available in Spain / Poland / English?
- How does early access work?

#### Footer
Minimal and clear.
Can include:
- navigation
- language awareness
- contact / demo / feedback entry
- legal placeholders if needed

## 10) Copywriting rules
Copy should be:
- simple
- concrete
- practical
- non-corporate
- no fluffy AI/startup wording
- no exaggerated promises

Prefer:
- "more order in the workshop"
- "easier booking"
- "from visit to estimate, order and invoice"
- "built for real workshop work"

Avoid:
- "revolutionary"
- "game-changing"
- "best-in-class"
- "cutting edge synergy"
- generic enterprise language

## 11) Multilingual requirements
Must use `next-intl` from the beginning.

Requirements:
- locale routing with `es`, `pl`, `en`
- clean translation file structure
- no scattered hardcoded strings in final implementation
- page metadata should be localized where practical
- navigation and CTAs must be translated

Spanish is the default locale.

## 12) Theme requirements
Landing must support:
- light mode
- dark mode

Theme must feel intentional in both modes.
Do not make dark mode an afterthought.

Dark mode tone:
- premium dark workshop SaaS
- deep navy / graphite / charcoal surfaces
- subtle borders and glow only when tasteful

Light mode tone:
- clean, professional, lightly industrial
- not sterile white startup look

Use a class-based theme strategy that works cleanly with App Router.

## 13) SEO and discoverability
The landing should be built with strong fundamentals for both:
- traditional search
- AI/search assistant discovery

Requirements:
- semantic structure
- strong headings
- clear product/category language
- metadata per locale
- no keyword stuffing
- real language around workshop software, garage management, online booking, estimates, invoices
- good FAQ structure

Focus on clarity over gimmicks.

## 14) Forms / backend scope for v1
Do not overbuild backend too early.
For v1, form handling can be minimal and practical.
Priority is to validate demand.

Possible acceptable v1 approaches:
- email/Resend-based submission
- simple server action
- minimal contact form with success state

Need fields like:
- workshop name
- name
- email
- country / language
- interest type (demo / waitlist / feedback)
- optional message

Do not introduce a heavy database unless clearly needed.

## 15) Build philosophy
Build in **small surgical patches**.
Do not do giant rewrites without a plan.

For each implementation step:
1. readonly audit / plan first
2. then one small patch
3. then summary of changed files and what was done
4. then next step after approval

## 16) Code quality rules
- keep architecture clean
- avoid unnecessary abstraction early
- prefer understandable code over clever code
- use reusable section/layout primitives when it helps
- keep translations organized
- keep component boundaries sensible
- avoid mixing lots of business copy directly inside large JSX blocks if it hurts maintainability
- keep responsive behavior deliberate

## 17) Explicit exclusions for v1
Do not add unless specifically requested:
- blog
- CMS
- dashboard clone inside landing
- complex analytics dashboards
- fake social proof
- complex animation-heavy hero videos
- enterprise pricing matrix
- multilingual overengineering beyond `es/pl/en`
- backend overbuild
- unnecessary DB

## 18) Final success criteria
The landing is successful when:
- it looks credible and premium
- it clearly explains AutoSlot for workshop owners
- it reflects the real flow: visit -> estimate -> order -> invoice
- it works in `es`, `pl`, `en`
- it supports light and dark mode
- it feels closer to AutoSlot’s product language than to a generic SaaS template
- it makes it easy to request a demo, join early access, or leave feedback
- it is ready to test market response before deeper commercial commitments
