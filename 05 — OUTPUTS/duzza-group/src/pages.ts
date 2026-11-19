import {
  buttonLink,
  editorialGallery,
  equipmentPanels,
  escapeHtml,
  eyebrow,
  imageFrame,
  processList,
  sectionHeading,
  serviceCards,
  servicesScrollSection,
  workGrid
} from './components'
import type { WorkTile } from './components'
import {
  brandingProjects,
  brandingServices,
  businesses,
  equipmentCategories,
  getBrandingProject,
  getEquipmentCategory,
  getEquipmentItems,
  legalCopy,
  processSteps,
  projectsServices,
  surveyCapabilities
} from './data'

type HeroAction = { label: string; href: string }

const selectedWork: WorkTile[] = [
  {
    title: 'Engineering and construction',
    credit: 'DUZZA Projects',
    tags: 'Projects · Survey',
    image: '/assets/construction-team.webp',
    alt: 'Engineer in safety equipment on a construction site',
    href: '/businesses/projects/',
    action: 'View projects'
  },
  {
    title: 'Marine and hydrographic survey',
    credit: 'DUZZA Projects',
    tags: 'Survey · Marine',
    image: '/assets/survey-vessel-fugro.webp',
    alt: 'Hydrographic survey vessel at sea',
    href: '/businesses/projects/',
    action: 'View projects'
  },
  {
    title: 'Equipment hire and supply',
    credit: 'DUZZA Projects',
    tags: 'Equipment · Field support',
    image: '/assets/side-scan-unit.webp',
    alt: 'Side-scan sonar equipment used for seabed surveys',
    href: '/projects/equipment/',
    action: 'View equipment catalogue'
  },
  {
    title: 'Brand systems and digital',
    credit: 'DUZZA Branding',
    tags: 'Branding · Digital',
    image: '/assets/website-mockup.webp',
    alt: 'Editorial architecture website concept for a creative studio',
    href: '/businesses/branding/',
    action: 'View branding'
  },
  {
    title: 'Fashion direction',
    credit: 'DUZZA Group',
    tags: 'Fashion · Ankara',
    image: '/assets/fashion-woman-ankara.webp',
    alt: 'Woman wearing a vibrant Ankara outfit',
    href: '/businesses/fashion/',
    action: 'Explore fashion'
  },
  {
    title: 'Food direction',
    credit: 'DUZZA Group',
    tags: 'Food · Intercontinental',
    image: '/assets/african-jollof.webp',
    alt: 'Jollof rice plated with garnish',
    href: '/businesses/food/',
    action: 'Explore food'
  }
]

function heroSection(
  eyebrowText: string,
  title: string,
  copy: string,
  image: string,
  imageAlt: string,
  primary: HeroAction,
  secondary?: HeroAction
): string {
  return `
    <section class="page-hero" aria-labelledby="page-hero-title">
      <div class="shell page-hero-copy" data-reveal>
        ${eyebrow(eyebrowText)}
        <h1 id="page-hero-title">${title}</h1>
        <p class="hero-copy">${copy}</p>
        <div class="hero-actions">
          ${buttonLink(primary.label, primary.href)}
          ${secondary ? buttonLink(secondary.label, secondary.href, 'outline') : ''}
        </div>
      </div>
      <figure class="page-hero-media media-zoom">
        <img class="zoom-target" src="${image}" alt="${imageAlt}" />
        <figcaption class="hero-media-caption">${eyebrowText}</figcaption>
      </figure>
    </section>
  `
}

function textHeroSection(eyebrowText: string, title: string, copy: string, primary: HeroAction, secondary?: HeroAction): string {
  return `
    <section class="page-intro page-intro-plain" aria-labelledby="page-hero-title">
      <div class="shell" data-reveal>
        ${eyebrow(eyebrowText)}
        <h1 id="page-hero-title">${title}</h1>
        <p class="lede">${copy}</p>
        <div class="hero-actions">
          ${buttonLink(primary.label, primary.href)}
          ${secondary ? buttonLink(secondary.label, secondary.href, 'outline') : ''}
        </div>
      </div>
    </section>
  `
}

function ctaBand(title: string, copy: string, action: HeroAction, secondary?: HeroAction): string {
  return `
    <section class="cta-band">
      <div class="shell cta-inner" data-reveal>
        <div>${eyebrow('Start a conversation')}<h2>${title}</h2><p>${copy}</p></div>
        <div class="hero-actions">${buttonLink(action.label, action.href)}${secondary ? buttonLink(secondary.label, secondary.href, 'outline') : ''}</div>
      </div>
    </section>
  `
}

function introSection(eyebrowText: string, title: string, copy: string, image?: string, imageAlt?: string): string {
  return `
    <section class="section-pad">
      <div class="shell editorial-split">
        <div data-reveal>${sectionHeading(eyebrowText, title, copy)}</div>
        ${image ? imageFrame(image, imageAlt ?? title, 'editorial-image') : ''}
      </div>
    </section>
  `
}

function teamWallSection(): string {
  const people = [
    {
      name: 'Projects desk',
      role: 'Project Coordinator',
      impact: 'Turns a brief into a workable scope, programme and a clear set of next steps.',
      image: '/assets/construction-team.webp',
      alt: 'Engineer in safety equipment on a construction site'
    },
    {
      name: 'Field survey',
      role: 'Survey Field Lead',
      impact: 'Shapes survey scoping, field coordination and deliverables that suit the brief.',
      image: '/assets/survey-field.webp',
      alt: 'Surveyor operating field survey equipment'
    },
    {
      name: 'Equipment desk',
      role: 'Equipment Specialist',
      impact: 'Matches requirements to the right equipment category, model and support route.',
      image: '/assets/side-scan-unit.webp',
      alt: 'Side-scan sonar equipment used for seabed surveys'
    },
    {
      name: 'Brand systems',
      role: 'Brand Systems Designer',
      impact: 'Builds identity systems that stay consistent across decks, products and campaigns.',
      image: '/assets/team-branding.webp',
      alt: 'Professional reviewing digital work on a laptop in a modern office'
    },
    {
      name: 'Digital studio',
      role: 'Digital Experience Designer',
      impact: 'Structures journeys and interfaces so every enquiry route is easy to use.',
      image: '/assets/designer-studio.webp',
      alt: 'Designer working at a desk in a creative studio'
    },
    {
      name: 'Consumer studio',
      role: 'Consumer Direction Lead',
      impact: 'Guides fashion and food concepts from visual direction through to launch.',
      image: '/assets/team-food.webp',
      alt: 'Chef in traditional attire outdoors'
    }
  ]

  return `
    <section class="team-section" data-team-section aria-labelledby="team-roles-title">
      <div class="shell team-heading" data-reveal>
        ${eyebrow('The people')}
        <h2 id="team-roles-title">Built by people who stay close to the work.</h2>
        <p>Specialist roles work together across the group. Scroll to meet the people who move each direction forward.</p>
      </div>

      <div class="team-track-wrap" data-team-track-wrap>
        <div class="team-track" data-team-track role="list">
          ${people.map((person, index) => `
            <article class="team-member" data-team-card role="listitem">
              <figure class="team-member-media">
                <img src="${person.image}" alt="${escapeHtml(person.alt)}" loading="lazy">
                <figcaption>${String(index + 1).padStart(2, '0')}</figcaption>
              </figure>
              <div class="team-member-body">
                <p class="team-member-name">${escapeHtml(person.name)}</p>
                <p class="team-member-role">${escapeHtml(person.role)}</p>
                <p class="team-member-impact">${escapeHtml(person.impact)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>

      <div class="shell team-note" data-reveal>Group leadership and specialist roles work across the group's active and developing directions. For introductions, partnerships or press, <a href="/contact/">use the general enquiry route</a>.</div>
    </section>
  `
}

function processListSection(): string {
  return `<section class="section-pad process-section"><div class="shell">${sectionHeading('Process', 'A clear path from first contact.', 'The detail is agreed before work begins.')}${processList(processSteps)}</div></section>`
}

function homePage(): string {
  return `
    <section class="home-hero" aria-labelledby="home-hero-title">
      <div class="shell home-hero-inner">
        <div class="home-hero-main">
          <h1 id="home-hero-title">Practical. Connected. Considered.</h1>
          <p class="home-hero-sub">
            <span>A multi-disciplinary group uniting projects, branding, fashion and food —</span>
            <span>delivering practical work for businesses and ideas that need to move forward.</span>
          </p>
        </div>
        <div class="home-hero-cta">
          ${buttonLink('Start an enquiry', '/contact/')}
        </div>
      </div>
      <figure class="home-hero-image media-zoom">
        <img class="zoom-target" src="/assets/hero-image.webp" alt="Modern building facade viewed from below" fetchpriority="high" />
        <figcaption class="hero-image-strip">
          <span>Projects.</span>
          <span>Branding.</span>
          <span>Fashion.</span>
          <span>Food</span>
        </figcaption>
      </figure>
      <span class="hero-scroll-cue">
        Scroll to explore our businesses
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v10m-4-4 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </section>

    <section class="section-pad home-intro">
      <div class="shell home-intro-grid">
        <div data-reveal>
          ${eyebrow('One group, connected capability')}
          <h2>From the field to the brand.</h2>
        </div>
        <div data-reveal>
          <p>Different industries ask different questions. DUZZA answers with useful services: project coordination, marine and survey support, equipment selection, identity systems, digital products and campaign content.</p>
          <p>Every brief is shaped around scope, audience, location, timing and the outcome that matters most.</p>
          ${buttonLink('About DUZZA GROUP', '/about/', 'outline')}
        </div>
      </div>
    </section>

    <section class="section-pad work-preview">
      <div class="shell">
        ${sectionHeading('Selected work', 'Practical work across the group.', 'Projects, services and equipment routes presented as one consistent, image-led index.')}
        ${workGrid(selectedWork, '', false)}
      </div>
    </section>

    ${servicesScrollSection()}

    ${ctaBand('Tell us what the work needs.', 'Send a clear brief and we will scope the services, deliverables and next steps around it.', { label: 'Request a quote', href: '/enquiries/projects/' }, { label: 'Start a branding brief', href: '/enquiries/branding/' })}
  `
}

function businessesPage(): string {
  return `
    ${heroSection('The group', 'Four directions. One practical standard.', 'DUZZA Projects and DUZZA Branding are active service areas. Fashion and Food are consumer directions in development, with every area held to the same practical standard.', '/assets/group-team.webp', 'Diverse team collaborating in a modern office', { label: 'Start an enquiry', href: '/contact/' })}

    <section class="section-pad">
      <div class="shell business-grid">
        ${businesses.map((business, index) => `
          <a class="business-card" href="${business.href}" data-reveal>
            <span class="business-number">0${index + 1}</span>
            <div>
              <p class="eyebrow">${business.eyebrow}</p>
              <h2>${business.title}</h2>
              <p>${business.description}</p>
              <span class="business-link">Explore ${business.title.replace('DUZZA ', '')} ↗</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    ${introSection('How we work', 'Scope first. Then deliver.', 'Every enquiry starts with the same questions: what is needed, where, by when and what a useful outcome looks like.', '/assets/boardroom-team.webp', 'Team discussing a project brief in a boardroom')}
    ${processListSection()}
    ${ctaBand('Not sure which route fits?', 'Use the general enquiry and describe what you are trying to do.', { label: 'General enquiry', href: '/enquiries/general/' })}
  `
}

function projectsPage(): string {
  return `
    ${heroSection('DUZZA Projects', 'Engineering, survey and supply support.', 'Practical services for built-environment, marine and field projects. Scope, deliverables and commercial detail are defined around each brief.', '/assets/construction-planning.webp', 'Construction professionals reviewing plans on site', { label: 'Request a project quote', href: '/enquiries/projects/' }, { label: 'View equipment catalogue', href: '/projects/equipment/' })}

    ${introSection('Capability', 'Build the scope around the real requirement.', 'DUZZA Projects covers engineering and construction support, oil and gas-related work, marine survey coordination, equipment selection and general supply.', '/assets/refinery-dusk.webp', 'Refinery at dusk')}

    <section class="section-pad"><div class="shell">${sectionHeading('Services', 'What we can scope.', 'Select the area that fits. The enquiry form captures the detail needed to respond.')}${serviceCards(projectsServices)}</div></section>

    <section class="section-pad split-feature">
      <div class="shell split-feature-grid">
        ${imageFrame('/assets/survey-vessel-fugro.webp', 'Hydrographic survey vessel', 'large')}
        <div data-reveal>
          ${eyebrow('Marine and survey')}
          <h2>Survey support with the outputs in view.</h2>
          <p>Share the purpose, location, coverage and required deliverables. We then shape the support route and the questions that need answering before any commitment.</p>
          ${serviceCards(surveyCapabilities)}
        </div>
      </div>
    </section>

    ${processListSection()}
    ${ctaBand('Ready to scope a project?', 'Send the location, timeline and work required.', { label: 'Project quote', href: '/enquiries/projects/' }, { label: 'Survey enquiry', href: '/enquiries/survey/' })}
  `
}

function brandingPage(): string {
  return `
    ${heroSection('DUZZA Branding', 'Brand systems with room to grow.', 'Identity, digital design, UGC content, AI product imagery, campaign content, photography and branded merchandise — developed as one clear visual language.', '/assets/branding-strategy.webp', 'Brand strategy materials, colour references and design tools arranged on a table', { label: 'Start a branding project', href: '/enquiries/branding/' })}

    ${introSection('Approach', 'Think in systems. Design for use.', 'A brand has to work on a screen, in a deck, on a product and in a campaign. We define the direction, then build the assets that make it consistent — including creator-led UGC and AI-assisted product imagery.', '/assets/project-brand-identity.webp', 'Brand identity and stationery system')}

    <section class="section-pad"><div class="shell">${sectionHeading('Services', 'Creative and digital capability.', 'From first identity direction through UGC, AI product visuals, launch content and long-term brand support.')}${serviceCards(brandingServices)}</div></section>

    <section class="section-pad digital-studio">
      <div class="shell">
        ${sectionHeading('Digital delivery', 'The system, shown in use.', 'UGC, mobile app, website and AI product imagery — four expressions of one brand system, not four disconnected deliverables.')}
        <div class="digital-grid">
          <article class="digital-card digital-card--ugc" data-reveal>
            <div class="digital-media">
              <div class="ugc-reel">
                <figure class="ugc-frame ugc-frame--main">
                  <img src="/assets/ugc-creator.webp" alt="Creator filming a product review at home" loading="lazy">
                  <span class="play-badge" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M7 5.5v9l7-4.5z" fill="currentColor"/></svg></span>
                  <figcaption><span>Creator review</span><span>00:24</span></figcaption>
                </figure>
                <figure class="ugc-frame">
                  <img src="/assets/ugc-creator-2.webp" alt="Beauty creator presenting a product to camera" loading="lazy">
                  <span class="play-badge" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M7 5.5v9l7-4.5z" fill="currentColor"/></svg></span>
                  <figcaption><span>Held review</span><span>00:16</span></figcaption>
                </figure>
                <figure class="ugc-frame">
                  <img src="/assets/ugc-unboxing.webp" alt="Smartphone filming a product unboxing" loading="lazy">
                  <span class="play-badge" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M7 5.5v9l7-4.5z" fill="currentColor"/></svg></span>
                  <figcaption><span>Unboxing</span><span>00:09</span></figcaption>
                </figure>
              </div>
            </div>
            <div class="digital-copy">
              <div class="digital-copy-meta"><span class="digital-index">01</span>${eyebrow('UGC content')}</div>
              <h3>Creator-led content that feels native.</h3>
              <p>Practical UGC direction for launches, social channels and always-on content — planned around the product, audience and platform rather than a one-off shoot.</p>
            </div>
          </article>

          <article class="digital-card digital-card--app" data-reveal>
            <div class="digital-media digital-media--app">
              <div class="app-stage" aria-hidden="true">
                <div class="phone phone--rear">
                  <span class="phone-notch"></span>
                  <div class="app-screen">
                    <div class="app-top"><span class="app-brand">DUZZA</span><span>09:41</span></div>
                    <p class="app-kicker">Group services</p>
                    <h4>Four directions.<br>One standard.</h4>
                    <img class="app-photo" src="/assets/construction-team.webp" alt="" loading="lazy">
                    <div class="app-list">
                      <span>Projects <b>01</b></span>
                      <span>Branding <b>02</b></span>
                      <span>Fashion <b>03</b></span>
                      <span>Food <b>04</b></span>
                    </div>
                    <div class="app-tabbar"><span class="is-active">Home</span><span>Work</span><span>Brief</span><span>More</span></div>
                  </div>
                </div>
                <div class="phone phone--front">
                  <span class="phone-notch"></span>
                  <div class="app-screen app-screen--start">
                    <div class="app-top"><span>09:41</span><span>5G</span></div>
                    <div class="app-mark">D</div>
                    <p class="app-kicker">Start a project</p>
                    <h4>What are we building?</h4>
                    <div class="app-options"><span class="is-active">Brand</span><span>Website</span><span>App</span><span>Content</span></div>
                    <div class="app-field"><span>Brief</span><strong>New website and launch content</strong></div>
                    <span class="app-button">Continue ↗</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="digital-copy">
              <div class="digital-copy-meta"><span class="digital-index">02</span>${eyebrow('Mobile app')}</div>
              <h3>A service finder in the pocket.</h3>
              <p>App direction that turns a broad service offer into a clear, useful journey — from first browse to a scoped project brief.</p>
            </div>
          </article>

          <article class="digital-card digital-card--web" data-reveal>
            <div class="digital-media">
              <div class="browser-frame" aria-hidden="true">
                <div class="browser-bar">
                  <span class="browser-dots"><i></i><i></i><i></i></span>
                  <span class="browser-url">northline.studio</span>
                  <span class="browser-status">Concept</span>
                </div>
                <div class="browser-view">
                  <div class="browser-site">
                    <div class="mock-nav">
                      <strong>NORTHLINE</strong>
                      <div class="mock-nav-links"><span>Projects</span><span>Studio</span><span>Contact</span></div>
                    </div>
                    <div class="mock-hero">
                      <img src="/assets/refinery-dusk.webp" alt="" loading="lazy">
                      <div class="mock-hero-copy">
                        <span>Industrial places, considered</span>
                        <p>Space with a longer view.</p>
                      </div>
                    </div>
                    <div class="mock-site-foot"><span>Architecture &amp; interiors</span><span>Lagos / London</span><span>Selected work 2026</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="digital-copy">
              <div class="digital-copy-meta"><span class="digital-index">03</span>${eyebrow('Website design')}</div>
              <h3>A site that carries the whole system.</h3>
              <p>Information architecture, interface design and responsive delivery, with content and enquiry routes shaped around what visitors need to find and do.</p>
            </div>
          </article>

          <article class="digital-card digital-card--ai" data-reveal>
            <div class="digital-media">
              <div class="ai-frame">
                <img src="/assets/ai-product.webp" alt="Art-directed skincare product still life" loading="lazy">
                <span class="ai-badge">AI-assisted</span>
                <div class="ai-frame-meta"><span>Product still</span><span>01 / 03</span></div>
              </div>
            </div>
            <div class="digital-copy">
              <div class="digital-copy-meta"><span class="digital-index">04</span>${eyebrow('AI product imagery')}</div>
              <h3>Campaign stills, built for desire.</h3>
              <p>Art direction, lighting references and retouching shape AI-assisted product imagery that can move from feed to storefront without losing the brand.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad showcase-section">
      <div class="shell">
        ${sectionHeading('Selected work', 'Projects we’ve helped clients execute.', 'A look at the thinking, the work delivered and the outcomes behind recent brand and digital projects.')}
        ${workGrid(brandingProjects.map((project) => ({
          title: project.title,
          credit: project.category,
          tags: 'Branding · Selected work',
          image: project.image,
          href: `/work/project/?project=${encodeURIComponent(project.id)}`,
          action: 'View project'
        })))}
      </div>
    </section>

    <section class="section-pad split-feature reverse">
      <div class="shell split-feature-grid">
        <div data-reveal>
          ${eyebrow('Website delivery')}
          <h2>A website built around content, not a template.</h2>
          <p>Information architecture, user journeys, wireframes, interface design and responsive front-end development. Every decision is tied to what the audience needs to find and do.</p>
          <ul class="plain-list">
            <li>Structure and page hierarchy</li>
            <li>Content and enquiry routes</li>
            <li>Responsive interface design</li>
            <li>Accessibility and performance checks</li>
          </ul>
        </div>
        ${imageFrame('/assets/ux-sketch.webp', 'Mobile user experience sketch', 'large')}
      </div>
    </section>

    ${processListSection()}
    ${ctaBand('Have a brand brief?', 'Tell us the objective, audience, deliverables and timeline.', { label: 'Branding brief', href: '/enquiries/branding/' })}
  `
}

function projectDetailPage(): string {
  const id = new URLSearchParams(window.location.search).get('project')
  const project = getBrandingProject(id)

  if (!project) {
    return `
      ${heroSection('Selected work', 'Selected projects.', 'Choose a project from the branding work section.', '/assets/designer-studio.webp', 'Designer reviewing fabric samples in a studio', { label: 'View branding work', href: '/businesses/branding/' })}
      <section class="section-pad"><div class="shell">${workGrid(brandingProjects.map((item) => ({
        title: item.title,
        credit: item.category,
        tags: 'Branding · Selected work',
          image: item.image,
          href: `/work/project/?project=${encodeURIComponent(item.id)}`,
          action: 'View project'
        })))}</div></section>
    `
  }

  return `
    ${heroSection(project.category, project.title, project.summary, project.image, project.title, { label: 'Start a similar project', href: '/enquiries/branding/' }, { label: 'Back to branding', href: '/businesses/branding/' })}

    <section class="section-pad">
      <div class="shell editorial-split">
        <div data-reveal>${sectionHeading('The brief', 'The starting point.', project.brief)}</div>
        ${imageFrame(project.gallery[0], `${project.title} project image`, 'editorial-image')}
      </div>
    </section>

    <section class="section-pad project-narrative">
      <div class="shell">
        <div class="project-narrative-grid">
          <div data-reveal>
            ${eyebrow('What we executed')}
            <h2>Turning the brief into a working system.</h2>
            <ol class="narrative-list">${project.executed.map((item, index) => `<li><span>0${index + 1}</span><p>${item}</p></li>`).join('')}</ol>
          </div>
          <div data-reveal>
            ${eyebrow('Results')}
            <h2>What the work delivered.</h2>
            <ul class="result-list">${project.results.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad project-gallery">
      <div class="shell">
        ${sectionHeading('Project views', 'The work in context.', 'A closer look at the visual system and its applications.')}
        ${workGrid(project.gallery.map((image, index) => ({
          title: `View 0${index + 1}`,
          credit: project.title,
          tags: project.category,
          image,
          alt: `${project.title} view ${index + 1}`
        })))}
      </div>
    </section>

    ${ctaBand('Have a project in mind?', 'Share the objective and we will shape the right creative route.', { label: 'Start a branding project', href: '/enquiries/branding/' })}
  `
}

function fashionPage(): string {
  return `
    ${heroSection('Fashion', 'Ankara expression, cut for now.', 'DUZZA Fashion explores boutique clothing, English and Ankara pieces, and customised branded apparel — brought together through distinctive textiles and a clear point of view.', '/assets/fashion-woman-ankara.webp', 'Woman wearing a vibrant Ankara outfit', { label: 'General enquiry', href: '/enquiries/general/' })}

    <section class="section-pad upcoming-layout">
      <div class="shell editorial-split">
        <div data-reveal>${sectionHeading('Direction', 'Style, fit and brand expression.', 'The fashion direction focuses on considered pieces, distinctive Ankara textiles and a clear brand point of view for women and men.')}</div>
        ${imageFrame('/assets/fashion-fabric.webp', 'Colourful Ankara fabric arranged in a market', 'editorial-image')}
      </div>
    </section>

    <section class="section-pad fashion-lookbook">
      <div class="shell">
        ${sectionHeading('Lookbook', 'Ankara, in real wear.', 'A visual direction built around expressive pattern, modern tailoring and pieces that move easily between occasion and everyday.')}
        ${editorialGallery([
          { image: '/assets/fashion-man-ankara.webp', alt: 'Man wearing tailored Ankara attire', title: 'Tailored Ankara', meta: 'Menswear' },
          { image: '/assets/fashion-woman-pink.webp', alt: 'Woman in a pink patterned outfit', title: 'Occasion colour', meta: 'Womenswear' },
          { image: '/assets/fashion-woman-ankara.webp', alt: 'Woman in a richly patterned Ankara dress', title: 'Print and silhouette', meta: 'Editorial' },
          { image: '/assets/boutique-store.webp', alt: 'Boutique interior with a curated clothing display', title: 'Boutique experience', meta: 'Retail' }
        ])}
      </div>
    </section>

    <section class="section-pad"><div class="shell">${sectionHeading('Exploration', 'What the direction covers.', 'The fashion work is planned around identity-led pieces and a practical brand experience.')}${serviceCards([
      { title: 'Boutique clothing', description: 'Considered pieces with a distinct visual point of view.', points: ['Silhouette direction', 'Fabric and finish considerations', 'Brand-led detailing'] },
      { title: 'English and Ankara wear', description: 'A contemporary approach to familiar dress forms and patterned textiles.', points: ['Ankara and print direction', 'Modern cuts for women and men', 'Occasion and everyday ranges'] },
      { title: 'Customised pieces', description: 'Branded apparel concepts connected to a wider identity system.', points: ['Brand application', 'Artwork preparation', 'Product imagery direction'] }
    ])}</div></section>

    ${ctaBand('Interested in the direction?', 'Send a note through the general enquiry route.', { label: 'General enquiry', href: '/enquiries/general/' })}
  `
}

function foodPage(): string {
  return `
    ${heroSection('Food', 'West African flavour, considered.', 'DUZZA Food brings together West African cooking, bakery, pastry, confectionery and future eatery ideas under a clear brand expression.', '/assets/african-jollof.webp', 'Jollof rice plated with garnish', { label: 'General enquiry', href: '/enquiries/general/' })}

    <section class="section-pad upcoming-layout">
      <div class="shell editorial-split">
        <div data-reveal>${sectionHeading('Direction', 'A considered food brand.', 'The focus is on product quality, visual identity and a clear customer experience across every touchpoint — from a first plate to a full eatery concept.')}</div>
        ${imageFrame('/assets/african-cooking.webp', 'Cook preparing a West African dish', 'editorial-image')}
      </div>
    </section>

    <section class="section-pad food-gallery">
      <div class="shell">
        ${sectionHeading('Table', 'African and intercontinental, in range.', 'A food direction that can move between West African classics, shared mezze plates and bakery-led everyday moments.')}
        ${editorialGallery([
          { image: '/assets/mezze.webp', alt: 'Middle Eastern mezze platter with falafel', title: 'Shared plates', meta: 'Intercontinental' },
          { image: '/assets/african-jollof.webp', alt: 'Jollof rice plated with garnish', title: 'Jollof and sides', meta: 'West African' },
          { image: '/assets/bakery.webp', alt: 'Baker arranging pastries in a bakery', title: 'Bakery counter', meta: 'Bakery' }
        ])}
      </div>
    </section>

    <section class="section-pad"><div class="shell">${sectionHeading('Exploration', 'What the direction covers.', 'The food work is planned around products, packaging and brand expression.')}${serviceCards([
      { title: 'West African and intercontinental', description: 'Flavour-led menus that move between African and intercontinental plates.', points: ['Menu direction', 'Presentation and packaging', 'Brand application'] },
      { title: 'Bakery and confectionery', description: 'Everyday and occasion-led baked products and sweets.', points: ['Range direction', 'Packaging concepts', 'Product photography'] },
      { title: 'Eatery concepts', description: 'Food spaces shaped by brand, service and atmosphere.', points: ['Experience direction', 'Visual identity', 'Content and launch assets'] }
    ])}</div></section>

    ${ctaBand('Want to explore a partnership?', 'Use the general enquiry route for collaboration questions.', { label: 'General enquiry', href: '/enquiries/general/' })}
  `
}

function workPage(): string {
  return `
    ${heroSection('Work', 'Capability shown clearly.', 'Explore the service areas behind DUZZA GROUP, from engineering and survey work to equipment and creative projects.', '/assets/survey-field.webp', 'Surveyor operating field survey equipment', { label: 'Request a quote', href: '/enquiries/projects/' })}

    <section class="section-pad">
      <div class="shell">
        ${sectionHeading('Service showcases', 'What we can take on.', 'Each route leads to detailed services, deliverables and the right enquiry form.')}
        ${workGrid(selectedWork)}
      </div>
    </section>

    <section class="section-pad"><div class="shell">${sectionHeading('Creative projects', 'Selected work from the studio.', 'Explore the brief, execution and outcome behind each brand and digital project.')}${workGrid(brandingProjects.map((project) => ({
      title: project.title,
      credit: project.category,
          tags: 'Branding · Selected work',
          image: project.image,
          href: `/work/project/?project=${encodeURIComponent(project.id)}`,
          action: 'View project'
        })))}</div></section>

    ${ctaBand('Have a real brief?', 'Send the detail and we will scope the work properly.', { label: 'Project quote', href: '/enquiries/projects/' }, { label: 'Branding brief', href: '/enquiries/branding/' })}
  `
}

function aboutPage(): string {
  return `
    ${heroSection('About', 'A group built around useful work.', 'DUZZA GROUP connects project delivery, field support, creative services and consumer directions under one practical standard.', '/assets/boardroom-team.webp', 'Team discussing a project brief in a boardroom', { label: 'Contact the group', href: '/contact/' })}

    <section class="section-pad about-manifesto">
      <div class="shell">
        <div data-reveal>
          ${eyebrow('Our standard')}
          <h2>Be clear. Be useful. Keep improving.</h2>
          <p class="large-copy">We would rather define the work properly than decorate a vague brief. That means asking about scope, audience, location, timing and the outcome that matters.</p>
        </div>
        <div class="about-pillars">
          ${[
            { title: 'Practical', copy: 'Services shaped around real requirements and usable deliverables.' },
            { title: 'Connected', copy: 'Engineering, survey, equipment, brand and consumer ideas under one group.' },
            { title: 'Considered', copy: 'Clear thinking, careful execution and work that holds together in use.' }
          ].map((item, index) => `
            <article data-reveal><span>0${index + 1}</span><h3>${item.title}</h3><p>${item.copy}</p></article>
          `).join('')}
        </div>
      </div>
    </section>

    ${introSection('Structure', 'Four areas, one point of contact.', 'DUZZA Projects and DUZZA Branding are active service areas. Fashion and Food are consumer directions in development.', '/assets/branding-team.webp', 'Brand team reviewing work together in a studio')}

    ${teamWallSection()}
    ${processListSection()}
    ${ctaBand('Work with the group.', 'Choose the enquiry route that matches your requirement.', { label: 'Project quote', href: '/enquiries/projects/' }, { label: 'Branding brief', href: '/enquiries/branding/' })}
  `
}

function contactPage(): string {
  return `
    ${textHeroSection('Contact', 'Start with the right route.', 'Choose a focused enquiry form so the useful detail is captured from the beginning.', { label: 'General enquiry', href: '/enquiries/general/' })}

    <section class="section-pad">
      <div class="shell contact-grid">
        ${[
          { title: 'Projects', copy: 'Engineering, construction, oil and gas, survey support, supply and project work.', href: '/enquiries/projects/' },
          { title: 'Survey', copy: 'Marine and hydrographic survey purpose, coverage, location and outputs.', href: '/enquiries/survey/' },
          { title: 'Equipment hire', copy: 'Exact equipment, application, location, dates and support needs.', href: '/enquiries/equipment/' },
          { title: 'Branding', copy: 'Identity, websites, apps, campaigns, photography and merchandise.', href: '/enquiries/branding/' },
          { title: 'General', copy: 'Partnerships, press, careers and questions that do not fit another route.', href: '/enquiries/general/' }
        ].map((item, index) => `
          <a class="contact-card" href="${item.href}" data-reveal>
            <span>0${index + 1}</span><div><h2>${item.title}</h2><p>${item.copy}</p></div><strong>Open form ↗</strong>
          </a>
        `).join('')}
      </div>
    </section>

    ${introSection('A better first message', 'Tell us the outcome you need.', 'A focused brief helps us respond with the right scope, questions and next steps.', '/assets/boardroom-team.webp', 'Team discussing a project brief in a boardroom')}
  `
}

function equipmentPage(): string {
  return `
    ${heroSection('Equipment hire', 'Requirements-led support for field projects.', 'Browse named equipment across survey, positioning, marine support and general supply categories.', '/assets/equipment-odom-mb1.webp', 'Multibeam echo sounder', { label: 'Equipment enquiry', href: '/enquiries/equipment/' })}

    <section class="section-pad">
      <div class="shell">
        ${sectionHeading('Categories', 'Choose a direction, then explore the catalogue.', 'Each category opens a full-width catalogue with named equipment, practical details and a direct enquiry route.')}
        ${workGrid(equipmentCategories.map((category) => ({
          title: category.title,
          credit: category.use,
          tags: 'Equipment hire · Open catalogue',
          image: category.image,
          href: `/projects/equipment/?category=${encodeURIComponent(category.id)}`,
          action: 'View catalogue',
          attributes: `data-category="${category.id}" data-equipment-open`
        })), 'work-grid--equipment')}
      </div>
    </section>

    <section class="section-pad split-feature reverse">
      <div class="shell split-feature-grid">
        <div data-reveal>
          ${eyebrow('How enquiries work')}
          <h2>From catalogue to project brief.</h2>
          <p>Select a category, explore the named equipment and choose the item that fits the work. The enquiry form then captures the equipment name and the details unique to that system.</p>
          ${buttonLink('Open equipment enquiry', '/enquiries/equipment/', 'outline')}
        </div>
        ${imageFrame('/assets/container-depot.webp', 'Container depot and supply infrastructure', 'large')}
      </div>
    </section>

    ${ctaBand('Need help choosing?', 'Send the application and we will help match the equipment to the brief.', { label: 'Equipment enquiry', href: '/enquiries/equipment/' })}
    ${equipmentPanels()}
  `
}

function equipmentDetailPage(): string {
  const id = new URLSearchParams(window.location.search).get('item')
  const category = getEquipmentCategory(id)

  if (!category) {
    return `
      ${heroSection('Equipment', 'Browse equipment categories.', 'Choose a supported category to see named systems, typical use and the route to an equipment enquiry.', '/assets/equipment-odom-mb1.webp', 'Multibeam echo sounder', { label: 'View catalogue', href: '/projects/equipment/' })}
      <section class="section-pad"><div class="shell">
        ${sectionHeading('Categories', 'Supported equipment routes.', 'Select a category to continue.')}
        ${workGrid(equipmentCategories.map((item) => ({
          title: item.title,
          credit: item.use,
          tags: 'Equipment hire · Category',
          image: item.image,
          href: `/projects/equipment/detail/?item=${encodeURIComponent(item.id)}`,
          action: 'View category'
        })), 'work-grid--equipment')}
      </div></section>
    `
  }

  const items = getEquipmentItems(category.id)
  return `
    ${heroSection('Equipment category', category.title, category.description, category.image, category.title, { label: 'Explore equipment catalogue', href: `/projects/equipment/?category=${encodeURIComponent(category.id)}` }, { label: 'Back to categories', href: '/projects/equipment/' })}

    <section class="section-pad">
      <div class="shell">
        ${sectionHeading('Catalogue', 'Named equipment in this category.', 'Open an item to send a focused enquiry.')}
        ${workGrid(items.map((item) => ({
          title: item.name,
          credit: item.manufacturer,
          tags: 'Equipment · Enquire or book',
          image: item.image,
          href: `/enquiries/equipment/?item=${encodeURIComponent(category.title)}&model=${encodeURIComponent(item.name)}`,
          action: 'Enquire or book',
          alt: item.name
        })), 'work-grid--equipment')}
      </div>
    </section>

    ${ctaBand('Ready to enquire?', 'Choose the equipment name and send the project detail.', { label: 'Equipment enquiry', href: '/enquiries/equipment/' })}
    ${equipmentPanels()}
  `
}

function legalPage(variant: string): string {
  const copy = legalCopy[variant] ?? legalCopy.privacy
  return `
    ${heroSection('Legal', copy.title, copy.intro, '/assets/project-brand-identity.webp', 'DUZZA brand identity and stationery reference', { label: 'Contact the group', href: '/contact/' })}

    <section class="section-pad legal-page">
      <div class="shell legal-sections">
        ${copy.sections.map((section, index) => `
          <article data-reveal><span>0${index + 1}</span><h2>${section.heading}</h2><p>${section.body}</p></article>
        `).join('')}
      </div>
    </section>
  `
}

export function renderPage(page: string, variant?: string): string {
  switch (page) {
    case 'home': return homePage()
    case 'businesses': return businessesPage()
    case 'projects': return projectsPage()
    case 'branding': return brandingPage()
    case 'branding-project': return projectDetailPage()
    case 'fashion': return fashionPage()
    case 'food': return foodPage()
    case 'work': return workPage()
    case 'about': return aboutPage()
    case 'contact': return contactPage()
    case 'equipment': return equipmentPage()
    case 'equipment-detail': return equipmentDetailPage()
    case 'legal': return legalPage(variant ?? 'privacy')
    default: return homePage()
  }
}
