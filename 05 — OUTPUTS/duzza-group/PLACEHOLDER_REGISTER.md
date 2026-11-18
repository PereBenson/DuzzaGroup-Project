# DUZZA GROUP — Placeholder Register

Build date: 18 November 2026  
Build location: `C:\Users\Admin\Desktop\DuzzaGroup Project\05 — OUTPUTS\duzza-group`

This is an internal register of withheld, provisional or replacement-needed content. The public site does not label these items as placeholders; publication-safe states are used where verified data is unavailable.

## Contact and delivery destinations

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Project enquiry recipient | Form validates and shows `Enquiry prepared`; no destination connected. | Verified email, CRM, spreadsheet or backend destination. |
| Survey enquiry recipient | Client-side prepared only. | Verified delivery destination. |
| Equipment enquiry recipient | Client-side prepared only; equipment-specific fields included. | Verified delivery destination. |
| Branding enquiry recipient | Client-side prepared only. | Verified delivery destination. |
| General enquiry recipient | Client-side prepared only. | Verified delivery destination. |
| Public email address | Omitted. | Confirmed `mailto:` address. |
| Public phone number | Omitted. | Confirmed phone number and click-to-call decision. |
| WhatsApp destination | Floating control is present but inactive and non-clickable. | Confirmed WhatsApp number or Click-to-Chat URL. |
| Physical / registered address | Omitted. | Full verified address. |
| Instagram URL | Footer icon is present but non-clickable. | Confirmed Instagram URL. |
| LinkedIn URL | Footer icon is present but non-clickable. | Confirmed LinkedIn URL. |
| X URL | Footer icon is present but non-clickable. | Confirmed X URL. |
| Response expectation / autoresponder | No response-time claim or automatic reply. | Owner-approved wording and autoresponder content if needed. |

Source references: `src/data.ts` `whatsapp`, `enquiryForms`; `src/pages.ts` `contactPage()`; `src/components.ts` `renderFooter()`, `renderWhatsApp()`; `src/forms.ts`.

## Company identity and legal details

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Company registration number | Not shown. | Verified CAMA registration number. |
| Full registered office address | Not shown. | Verified address. |
| Director / leadership names and roles | Not shown. About uses role-based group-team cards with representative imagery. | Approved leadership details, bios, permissions and final headshots. |
| Incorporation evidence | Not shown. | Supporting document or owner confirmation for publication. |
| Legal identity wording | Not shown. | Owner review of exact public wording. |
| Final privacy notice | Current notice contains no demonstration wording; needs owner/legal review. | Recipient systems, analytics, storage locations, retention periods and legal review. |
| Final terms of use | Current terms contain no demonstration wording; needs owner/legal review. | Owner/legal review. |
| Final cookie notice and consent controls | Current notice contains no demonstration wording; needs owner/legal review. | Confirmation of analytics, pixels, embeds and consent requirements. |

Source references: `src/pages.ts` `aboutPage()`, `src/data.ts` `legalCopy`, `legal\*\index.html`.

## Projects evidence

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Named project records | Service capability and selected imagery are shown; no client names are used. | Approved project names, locations, dates, scopes and client permissions. |
| Client names and logos | Not shown. | Written permission and supplied assets. |
| Project photographs / survey outputs | Credited public and reference imagery is used editorially. | Approved images, captions, alt text and usage rights. |
| Testimonials | Not shown. | Approved quotes with attribution and permission. |
| Certifications / accreditations | Not shown. | Verified certificates and expiry dates. |
| Outcomes / metrics | Not shown. | Substantiated results and approval to publish. |
| Detailed service descriptions | Expanded service descriptions and deliverable lists are written from the supplied service scope. | Owner review and sign-off. |

Source references: `src/data.ts` `projectsServices`, `surveyCapabilities`, `processSteps`, `homeProjects`; `src/pages.ts` `projectsPage()`, `workPage()`.

## Equipment catalogue

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Confirmed DUZZA equipment inventory | Public equipment models are presented by category; inventory ownership is not claimed. | Verified inventory list and item hierarchy. |
| Stock / availability | Not shown; enquiries gather requirement detail. | Verified inventory status. |
| Hire rates | Not shown; enquiries request scope instead. | Approved rate card or instruction to request quotes. |
| Lead time, mobilisation and support terms | Collected in enquiry but not claimed on site. | Owner-approved published terms if required. |
| Approved equipment photography | Source-attributed equipment imagery is used. | Approved equipment photos and alt text. |
| Supply-chain partners | Not shown. | Approved partner names and permissions. |

Source references: `src/data.ts` `equipmentCategories`, `equipmentItems`, `imageCredits`; `src/pages.ts` `equipmentPage()`, `equipmentDetailPage()`; `src/components.ts` `equipmentPanels()`; `src/forms.ts` `initDynamicEquipmentFields()`.

## Branding portfolio

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Named client approvals | Four selected projects are presented with qualitative results and no client names. | Approved project records with client permission. |
| Client names and sectors | Not shown. | Verified names and permission. |
| Quantified outcomes | Not shown; qualitative outcomes are used. | Verified, approved results and metrics. |
| Approved project imagery | Credited public and reference imagery is used with project narratives. | Approved image/video files, captions, alt text and permissions. |
| Case-study permissions | Generic case-study route removed; tailored project detail route added. | Written approval for the published project narratives if required. |
| Deliverables list | Expanded deliverable lists are written from the service scope. | Verified asset list and formats. |

Source references: `src/data.ts` `brandingProjects`, `brandingServices`; `src/components.ts` `brandingProjectCards()`; `src/pages.ts` `brandingPage()`, `projectDetailPage()`; `work\project\index.html`.

## Fashion and Food

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Launch dates | Not shown. | Approved dates if the businesses are ready. |
| Products / menus | Not shown. | Final product or menu information. |
| Prices | Not shown. | Approved pricing. |
| Storefront / ordering flows | Not built. | Decision and owner-supplied requirements if commerce is needed later. |
| Approved brand photography | Editorial source imagery is used. | Approved photography and alt text. |
| Operational status | Described as consumer directions in development. | Update only when owner confirms launch. |

Source references: `src/data.ts` `businesses`; `src/pages.ts` `fashionPage()`, `foodPage()`.

## Visual and editorial assets

| Withheld item | Current public build state | Required owner input |
| --- | --- | --- |
| Extracted logo | `public/assets/duzza-logo-extracted.png` is used in header, footer and favicon. | Vector SVG, official light/dark variants and clear-space rules if available. |
| Hero photography | `public/assets/hero-image.webp` was generated from the exact user-labelled `hero image sample.jpg`. | Confirmation of final crop/use if a different treatment is required. |
| Reference-image treatment | Supplied references were processed into local WebP assets for editorial and creative direction. | Confirmation that the intended references are correct and cleared for publication. |
| External source imagery | Optimized WebP files use Wikimedia Commons and Pexels source imagery with credits recorded in `src/data.ts`. | Owner confirmation of final image selection and any required attribution format. |
| Branding website mockup | `public/assets/website-mockup.webp` captures the site's own fictional `NORTHLINE` browser mockup for the selected work card. | Replace with an approved real client project screenshot if required. |
| About-page leadership/culture content | Brief-derived and intentionally limited. Group teams use role-based cards; representative stock imagery is not presented as named staff. | Approved company story, leadership copy, named team profiles and final photography. |
| Insights / blog content | Not built. | Real content plan, author and publishing owner. |

Source references: `src/styles.css`, `src/components.ts`, `src/data.ts` `imageCredits`, `public/assets\duzza-logo-extracted.png`, `public/assets\hero-image.webp`, `public/assets\*.webp`.

## Source image credits

- `hero-image.webp`: client-supplied `hero image sample.jpg` from `02 — DESIGN REFERENCES\Reference Images`.
- `construction-team.webp`: Wikimedia Commons, `Construction workers at a site on Södra Hamngatan, Gothenburg.jpg`.
- `survey-vessel-fugro.webp`: Wikimedia Commons, `SV Fugro Gauss - IMO 7824883.jpg`.
- `refinery-dusk.webp`: Wikimedia Commons, `Wesseling Refinery at Dusk, March 2018.jpg`.
- `side-scan-unit.webp`: Wikimedia Commons, `Side Scan Sonar.jpg`.
- `designer-studio.webp`: Wikimedia Commons, `Graphic designer Rafael Esquer in his New York design studio 2021.jpg`.
- `ux-sketch.webp`: Wikimedia Commons, `Rough mobile UX sketch.jpg`.
- `boutique-store.webp`: Wikimedia Commons, `'title of work' store interior.jpg`.
- `pastries-display.webp`: Wikimedia Commons, `Pastries on display.jpg`.
- `boardroom.webp`: Wikimedia Commons, `A boardroom dialogue session at the 2011 Horasis Global Arab Business Meeting.jpg`.
- `container-depot.webp`: Wikimedia Commons, `Container depot.jpg`.
- `branding-strategy.webp`: Pexels photo 7598019, `Pictures of Brand Strategy and Design`.
- `about-team-meeting.webp`: Pexels photo 7495291, `Office Team Having a Meeting in the Room`.
- `about-team-collaboration.webp`: Pexels photo 3869649, `Diverse team of African women collaborating in an office meeting`.
- `team-projects.webp`: Pexels photo 8486920, Black female engineer at a construction site.
- `team-branding.webp`: Pexels photo 34690061, African businessman working on a laptop in a modern office.
- `team-food.webp`: Pexels photo 30255515, African woman chef outdoors.
- `website-mockup.webp`: generated locally from the DUZZA Branding browser mockup; the fictional `NORTHLINE` studio content is part of the design, not a client work sample.
- Equipment images and per-item credits are stored in `src/data.ts` `equipmentItems[].credit` and `equipmentItems[].source`.
- Additional client-supplied reference assets remain in `02 — DESIGN REFERENCES\Reference Images`.

## Publication-safe states

- Inactive social icons and the inactive WhatsApp control are the intended states until verified URLs and numbers are supplied.
- Form confirmation is client-side only because no delivery destination is configured.
- Withheld contact details are publication gaps, not missing implementation.
- Equipment stock, rates and mobilisation terms are intentionally withheld rather than invented.
- Branding results are qualitative and unnamed until approved named outcomes are supplied.
- Fashion and Food remain consumer directions in development until launch details and approved assets are supplied.
- Fixed navigation, scroll progress, mobile toggle animation and equipment-panel header offsets are completed implementation states, not withheld content; no owner input is required.
