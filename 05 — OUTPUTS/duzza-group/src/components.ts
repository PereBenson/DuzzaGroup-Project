import { brandingProjects, businesses, equipmentCategories, equipmentItems, homeServiceChapters } from './data'

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function buttonLink(label: string, href: string, variant: 'primary' | 'outline' | 'light' = 'primary'): string {
  return `<a class="button button-${variant}" href="${escapeHtml(href)}">${escapeHtml(label)}<span aria-hidden="true">↗</span></a>`
}

function chevron(): string {
  return `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

function arrow(): string {
  return `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function eyebrow(text: string): string {
  return `<p class="eyebrow">${escapeHtml(text)}</p>`
}

export function sectionHeading(eyebrowText: string, title: string, copy?: string): string {
  return `
    <div class="section-heading" data-reveal>
      ${eyebrow(eyebrowText)}
      <h2>${escapeHtml(title)}</h2>
      ${copy ? `<p class="section-copy">${escapeHtml(copy)}</p>` : ''}
    </div>
  `
}

export function imageFrame(src: string, alt: string, className = ''): string {
  return `
    <figure class="image-frame ${className}" data-reveal>
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">
    </figure>
  `
}

export type EditorialGalleryItem = {
  image: string
  alt: string
  title: string
  meta: string
}

export function editorialGallery(items: EditorialGalleryItem[]): string {
  return `
    <div class="editorial-gallery">
      ${items.map((item, index) => `
        <figure class="editorial-gallery-item editorial-gallery-item-${index + 1}" data-reveal>
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy">
          <figcaption>
            <span>${escapeHtml(item.meta)}</span>
            <strong>${escapeHtml(item.title)}</strong>
          </figcaption>
        </figure>
      `).join('')}
    </div>
  `
}

function megaBusinesses(): string {
  return `
    <div class="mega-panel" id="mega-businesses" data-mega-panel data-mega="businesses" aria-hidden="true" inert>
      <div class="mega-inner shell">
        <div class="mega-lead">
          ${eyebrow('Businesses')}
          <h3>One Group,<br>Efficiency Across Industries</h3>
          <p>Four connected areas, each with a clear role in delivering practical work.</p>
          ${buttonLink('About DUZZA GROUP', '/about/')}
        </div>
        <div class="mega-links">
          ${businesses.map((business) => `
            <a class="mega-link" href="${escapeHtml(business.href)}">
              <span class="mega-link-index">${escapeHtml(business.eyebrow)}</span>
              <strong>${escapeHtml(business.title)} ${arrow()}</strong>
              <span>${escapeHtml(business.menuSummary)}</span>
            </a>
          `).join('')}
        </div>
        <a class="mega-feature" href="/businesses/projects/">
          <img src="/assets/survey-vessel-fugro.webp" alt="Hydrographic survey vessel" loading="lazy">
          <span><small>Featured direction</small><strong>Projects that work in the real world</strong></span>
        </a>
      </div>
    </div>
  `
}

function mobileMenu(): string {
  return `
    <div class="mobile-menu" id="mobile-menu" data-mobile-menu aria-hidden="true" inert>
      <div class="mobile-menu-top shell">
        <span class="mobile-logo">DUZZA GROUP</span>
        <button class="icon-button" type="button" data-menu-close aria-label="Close menu"><span aria-hidden="true">×</span></button>
      </div>
      <nav class="mobile-nav shell" aria-label="Mobile primary">
        <a href="/about/">About</a>
        <div class="mobile-accordion" data-accordion>
          <button type="button" aria-expanded="false" aria-controls="mobile-businesses">Businesses ${chevron()}</button>
          <div class="mobile-submenu" id="mobile-businesses" aria-hidden="true" inert>
            <div class="mobile-submenu-inner">
              ${businesses.map((business) => `<a href="${escapeHtml(business.href)}">${escapeHtml(business.title)}</a>`).join('')}
            </div>
          </div>
        </div>
        <a href="/contact/">Contact</a>
      </nav>
      <div class="mobile-menu-foot shell">${buttonLink('Start an enquiry', '/enquiries/projects/')}</div>
    </div>
  `
}

export function renderHeader(): string {
  return `
    <a class="skip-link" href="#page-content">Skip to content</a>
    <header class="site-header" data-site-header>
      <div class="header-bar">
        <div class="shell header-inner">
          <a class="brand" href="/" aria-label="DUZZA GROUP home">
            <img src="/assets/duzza-logo-extracted.png" alt="DUZZA GROUP" data-logo>
          </a>
          <nav class="desktop-nav" aria-label="Primary">
            <a href="/about/" data-nav-link>About</a>
            <button type="button" data-mega-trigger="businesses" aria-expanded="false" aria-controls="mega-businesses" data-nav-link>Businesses ${chevron()}</button>
            <a href="/contact/" data-nav-link>Contact</a>
          </nav>
          <div class="header-actions">
            <a class="header-cta" href="/enquiries/projects/" data-header-cta>Start an enquiry <span aria-hidden="true">↗</span></a>
            <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
              <span></span><span></span>
            </button>
          </div>
        </div>
      </div>
      <div class="scroll-progress" data-scroll-progress aria-hidden="true"></div>
      <div class="mega-layer" data-mega-layer aria-hidden="true">
        ${megaBusinesses()}
      </div>
      <div class="nav-scrim" data-nav-scrim></div>
      ${mobileMenu()}
    </header>
  `
}

export function renderWhatsApp(): string {
  return ''
}

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="shell footer-top">
        <div class="footer-brand">
          <img src="/assets/duzza-logo-extracted.png" alt="DUZZA GROUP">
          <p>Practical services and creative capability across engineering, survey, equipment, brand and consumer directions.</p>
        </div>
        <div class="footer-column">
          <p class="footer-label">Businesses</p>
          ${businesses.map((business) => `<a href="${escapeHtml(business.href)}">${escapeHtml(business.title)}</a>`).join('')}
        </div>
        <div class="footer-column">
          <p class="footer-label">Enquiries</p>
          <a href="/enquiries/projects/">Project quote</a>
          <a href="/enquiries/survey/">Survey enquiry</a>
          <a href="/enquiries/equipment/">Equipment hire</a>
          <a href="/enquiries/branding/">Branding brief</a>
          <a href="/enquiries/general/">General enquiry</a>
        </div>
        <div class="footer-column">
          <p class="footer-label">Group</p>
          <a href="/about/">About DUZZA GROUP</a>
          <a href="/work/">Selected work</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
      <div class="shell footer-bottom">
        <span>© ${new Date().getFullYear()} DUZZA GROUP.</span>
        <nav aria-label="Legal">
          <a href="/legal/privacy/">Privacy</a>
          <a href="/legal/terms/">Terms</a>
        </nav>
        <span>Engineering · Survey · Equipment · Brand</span>
      </div>
      ${renderWhatsApp()}
    </footer>
  `
}

export function serviceCards(services: { title: string; description: string; points: string[] }[]): string {
  return `
    <div class="card-grid">
      ${services.map((service, index) => `
        <article class="service-card" data-reveal>
          <span class="card-index">0${index + 1}</span>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.description)}</p>
          <ul>${service.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
        </article>
      `).join('')}
    </div>
  `
}

export function brandingProjectCards(projects: typeof brandingProjects): string {
  return `
    <div class="branding-project-grid">
      ${projects.map((project) => `
        <a class="branding-project-card" href="/work/project/?project=${encodeURIComponent(project.id)}" data-reveal>
          <div class="branding-project-image">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">
            <span>${escapeHtml(project.category)}</span>
          </div>
          <div class="branding-project-body">
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <strong>View project ${arrow()}</strong>
          </div>
        </a>
      `).join('')}
    </div>
  `
}

export function processList(steps: { title: string; description: string; points: string[] }[]): string {
  return `
    <div class="process-list">
      ${steps.map((step, index) => `
        <article class="process-step" data-reveal>
          <span class="process-number">0${index + 1}</span>
          <div><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.description)}</p></div>
          <ul>${step.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
        </article>
      `).join('')}
    </div>
  `
}

export function servicesScrollSection(): string {
  const chapters = homeServiceChapters
  const first = chapters[0]
  const total = String(chapters.length).padStart(2, '0')

  return `
    <section class="services-scroll" data-services-scroll aria-labelledby="services-scroll-title">
      <div class="shell">
        <div class="services-scroll-head" data-reveal>
          <div>
            ${eyebrow('Across the group')}
            <h2 id="services-scroll-title">What we offer in each business area.</h2>
          </div>
          <p>Explore the exact services, skills and tools behind each area of the group. Scroll, or choose a direction to jump straight to it.</p>
        </div>

        <div class="services-scroll-nav-wrap">
          <div class="services-scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
          <nav class="services-scroll-nav" aria-label="Service categories">
            ${chapters.map((chapter, index) => `
              <button class="service-nav-button${index === 0 ? ' is-active' : ''}" type="button" data-scroll-jump="${index}" aria-current="${index === 0 ? 'step' : 'false'}">
                <span>${String(index + 1).padStart(2, '0')}</span>${escapeHtml(chapter.shortTitle)}
              </button>
            `).join('')}
          </nav>
        </div>

        <div class="services-scroll-grid">
          <div class="services-scroll-copy">
            ${chapters.map((chapter, index) => `
              <article class="service-chapter${index === 0 ? ' is-active' : ''}" id="service-${escapeHtml(chapter.id)}" data-service-item data-index="${index}">
                <div class="service-chapter-rail" aria-hidden="true">
                  <span class="service-chapter-number">${String(index + 1).padStart(2, '0')}</span>
                  <span class="service-chapter-tick"></span>
                </div>
                <div class="service-chapter-body">
                  <p class="service-chapter-kicker"><span>${escapeHtml(chapter.subsidiary)}</span><span>${escapeHtml(chapter.status)}</span></p>
                  <p class="service-chapter-label">${escapeHtml(chapter.label)}</p>
                  <h3>${escapeHtml(chapter.title)}</h3>
                  <p class="service-chapter-description">${escapeHtml(chapter.description)}</p>
                  <p class="service-skills-label">Skills and tools</p>
                  <ul class="service-points">
                    ${chapter.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
                  </ul>
                  <a class="service-chapter-link" href="${escapeHtml(chapter.href)}">${escapeHtml(chapter.action)}<span aria-hidden="true">↗</span></a>
                  <img class="service-mobile-image" src="${escapeHtml(chapter.image)}" alt="${escapeHtml(chapter.imageAlt)}" loading="lazy">
                </div>
              </article>
            `).join('')}
          </div>

          <div class="services-scroll-visual">
            <div class="sticky-media">
              <div class="scroll-image-stack" aria-hidden="true">
                ${chapters.map((chapter, index) => `
                  <img class="scroll-image${index === 0 ? ' is-active' : ''}" data-scroll-image data-index="${index}" src="${escapeHtml(chapter.image)}" alt="">
                `).join('')}
              </div>
              <div class="scroll-media-meta" aria-hidden="true"><span data-scroll-count>01</span><span>/ ${total}</span></div>
              <div class="scroll-media-caption" aria-hidden="true">
                <span data-scroll-subsidiary>${escapeHtml(first.subsidiary)}</span>
                <strong data-scroll-title>${escapeHtml(first.title)}</strong>
              </div>
              <div class="scroll-media-controls">
                <button type="button" data-scroll-step="-1" aria-label="Previous service"><span aria-hidden="true">←</span></button>
                <button type="button" data-scroll-step="1" aria-label="Next service"><span aria-hidden="true">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export function equipmentPanels(): string {
  return `
    <div class="equipment-overlay" data-equipment-overlay aria-hidden="true">
      <div class="equipment-panel" data-equipment-panel role="dialog" aria-modal="true" aria-label="Equipment catalogue">
        <div class="equipment-panel-bar">
          <button class="panel-back" type="button" data-equipment-close>← Back to categories</button>
          <span data-equipment-panel-label>Equipment catalogue</span>
        </div>
        ${equipmentCategories.map((category) => {
          const items = equipmentItems.filter((item) => item.categoryId === category.id)
          return `
            <section class="equipment-panel-view" data-panel-view="${category.id}">
              <div class="shell equipment-panel-head" data-reveal>
                ${eyebrow(category.title)}
                <h2>Explore the equipment catalogue.</h2>
                <p>${escapeHtml(category.description)}</p>
              </div>
              <div class="shell equipment-story" data-equipment-story data-category="${category.id}">
                <div class="equipment-story-visual">
                  <div class="equipment-story-sticky">
                    ${items.map((item, index) => `
                      <img class="equipment-story-image${index === 0 ? ' is-active' : ''}" data-story-image data-index="${index}" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
                    `).join('')}
                    <div class="equipment-story-caption"><span data-story-count>01</span><span data-story-name>${escapeHtml(items[0]?.name ?? '')}</span></div>
                  </div>
                </div>
                <div class="equipment-story-copy">
                  ${items.map((item, index) => `
                    <article class="equipment-story-item${index === 0 ? ' is-active' : ''}" data-story-item data-index="${index}">
                      <div class="equipment-story-meta"><span>0${index + 1}</span><span>${escapeHtml(item.manufacturer)}</span></div>
                      <h3>${escapeHtml(item.name)}</h3>
                      <p>${escapeHtml(item.summary)}</p>
                      <img class="equipment-story-mobile-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">
                      <ul>${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>
                      <div class="equipment-specs">
                        ${item.specs.map((spec) => `<div><span>${escapeHtml(spec.label)}</span><strong>${escapeHtml(spec.value)}</strong></div>`).join('')}
                      </div>
                      ${buttonLink('Enquire or book this equipment', `/enquiries/equipment/?item=${encodeURIComponent(category.title)}&model=${encodeURIComponent(item.name)}`)}
                      <small>Image: ${escapeHtml(item.credit)}</small>
                    </article>
                  `).join('')}
                </div>
              </div>
            </section>
          `
        }).join('')}
      </div>
    </div>
  `
}

export function galleryWall(items: { title: string; description: string; href: string; image: string; meta: string }[]): string {
  return `
    <div class="gallery-wall">
      ${items.map((item, index) => `
        <a class="gallery-card gallery-card-${index + 1}" href="${escapeHtml(item.href)}" data-reveal>
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <div>
            <span class="gallery-meta">${escapeHtml(item.meta)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </a>
      `).join('')}
    </div>
  `
}

export type WorkTile = {
  title: string
  credit: string
  tags: string
  image: string
  href?: string
  alt?: string
  attributes?: string
  action?: string
}

export function workGrid(items: WorkTile[], className = '', showActions = true): string {
  return `
    <div class="work-grid ${className}">
      ${items.map((item) => {
        const tag = item.href ? 'a' : 'article'
        const href = item.href ? ` href="${escapeHtml(item.href)}"` : ''
        return `
          <${tag} class="work-item"${href}${item.attributes ? ` ${item.attributes}` : ''} data-reveal>
            <div class="work-caption">
              <h3>${escapeHtml(item.title)}</h3>
              <p class="work-credit">${escapeHtml(item.credit)}</p>
              <p class="work-tags">${escapeHtml(item.tags)}</p>
              ${item.action && showActions ? `<span class="work-action">${escapeHtml(item.action)}</span>` : ''}
            </div>
            <div class="work-media">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt ?? item.title)}" loading="lazy">
            </div>
          </${tag}>
        `
      }).join('')}
    </div>
  `
}
