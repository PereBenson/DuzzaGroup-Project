function query<T extends Element>(selector: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll<T>(selector))
}

function setMega(name: string | null, open: boolean): void {
  query<HTMLElement>('[data-mega-panel]').forEach((panel) => {
    const active = open && panel.dataset.mega === name
    panel.setAttribute('aria-hidden', active ? 'false' : 'true')
    panel.classList.toggle('is-open', active)
  })

  query<HTMLElement>('[data-mega-trigger]').forEach((trigger) => {
    const active = open && trigger.dataset.megaTrigger === name
    trigger.setAttribute('aria-expanded', active ? 'true' : 'false')
    trigger.classList.toggle('is-active', active)
  })

  const layer = document.querySelector<HTMLElement>('[data-mega-layer]')
  const scrim = document.querySelector<HTMLElement>('[data-nav-scrim]')
  const anyOpen = Boolean(document.querySelector('[data-mega-panel].is-open'))
  layer?.setAttribute('aria-hidden', anyOpen ? 'false' : 'true')
  scrim?.classList.toggle('is-visible', anyOpen)
}

function initMegaMenus(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]')
  const scrim = document.querySelector<HTMLElement>('[data-nav-scrim]')
  const desktop = window.matchMedia('(min-width: 992px)')
  let closeTimer = 0

  const cancelClose = (): void => {
    window.clearTimeout(closeTimer)
  }

  const scheduleClose = (): void => {
    cancelClose()
    closeTimer = window.setTimeout(() => setMega(null, false), 140)
  }

  query<HTMLElement>('[data-mega-trigger]').forEach((trigger) => {
    const name = trigger.dataset.megaTrigger
    if (!name) return

    trigger.addEventListener('click', (event) => {
      event.stopPropagation()
      const isOpen = trigger.getAttribute('aria-expanded') === 'true'
      setMega(isOpen ? null : name, !isOpen)
    })

    trigger.addEventListener('mouseenter', () => {
      if (!desktop.matches) return
      cancelClose()
      setMega(name, true)
    })

    trigger.addEventListener('focus', () => {
      if (!desktop.matches) return
      cancelClose()
      setMega(name, true)
    })
  })

  query<HTMLElement>('[data-mega-panel]').forEach((panel) => {
    panel.addEventListener('mouseenter', cancelClose)
    panel.addEventListener('mouseleave', scheduleClose)
    panel.addEventListener('focusin', cancelClose)
    panel.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).closest('a')) setMega(null, false)
    })
  })

  header?.addEventListener('mouseleave', scheduleClose)
  scrim?.addEventListener('click', () => setMega(null, false))
  document.addEventListener('click', (event) => {
    if (!(event.target as HTMLElement).closest('[data-site-header]')) setMega(null, false)
  })
  desktop.addEventListener('change', () => setMega(null, false))
}

function setMobileMenu(open: boolean, restoreFocus = false): void {
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]')
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]')
  if (!menu || !toggle) return

  menu.setAttribute('aria-hidden', open ? 'false' : 'true')
  menu.toggleAttribute('inert', !open)
  menu.classList.toggle('is-open', open)
  toggle.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  document.body.classList.toggle('menu-open', open)

  const main = document.querySelector<HTMLElement>('[data-page-content]')
  const footer = document.querySelector<HTMLElement>('[data-footer-root]')
  main?.toggleAttribute('inert', open)
  footer?.toggleAttribute('inert', open)

  if (open) {
    window.setTimeout(() => menu.querySelector<HTMLElement>('a, button')?.focus(), 60)
  } else {
    query<HTMLElement>('[data-accordion]').forEach((accordion) => {
      const button = accordion.querySelector<HTMLButtonElement>('button')
      const submenu = accordion.querySelector<HTMLElement>('.mobile-submenu')
      button?.setAttribute('aria-expanded', 'false')
      accordion.classList.remove('is-open')
      submenu?.setAttribute('inert', '')
      submenu?.setAttribute('aria-hidden', 'true')
    })
    if (restoreFocus) toggle.focus()
  }
}

function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]')
  const close = document.querySelector<HTMLElement>('[data-menu-close]')
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true'
    setMobileMenu(!isOpen)
  })
  close?.addEventListener('click', () => setMobileMenu(false, true))
  query<HTMLElement>('[data-mobile-menu] a').forEach((link) => link.addEventListener('click', () => setMobileMenu(false)))

  query<HTMLElement>('[data-accordion]').forEach((accordion) => {
    const button = accordion.querySelector<HTMLButtonElement>('button')
    const submenu = accordion.querySelector<HTMLElement>('.mobile-submenu')
    button?.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true'
      button.setAttribute('aria-expanded', open ? 'true' : 'false')
      accordion.classList.toggle('is-open', open)
      submenu?.toggleAttribute('inert', !open)
      submenu?.setAttribute('aria-hidden', open ? 'false' : 'true')
    })
  })

  document.addEventListener('keydown', (event) => {
    const menu = document.querySelector<HTMLElement>('[data-mobile-menu]')
    if (!menu || toggle?.getAttribute('aria-expanded') !== 'true') return

    if (event.key === 'Escape') {
      event.preventDefault()
      setMega(null, false)
      setMobileMenu(false, true)
      return
    }

    if (event.key !== 'Tab') return
    const focusables = [toggle, ...query<HTMLElement>('a, button', menu)]
      .filter((element) => !element.hasAttribute('disabled') && !element.closest('[inert]') && element.getClientRects().length > 0)
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
}

function initScrollState(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]')
  if (!header) return

  const hero = document.querySelector<HTMLElement>('[data-page-content] > section:first-child')
  const update = (): void => {
    const headerHeight = header.offsetHeight
    header.classList.toggle('is-scrolled', window.scrollY > 18)
    const heroEnd = hero ? hero.offsetTop + hero.offsetHeight - headerHeight : window.innerHeight * 0.8
    header.classList.toggle('is-away', window.scrollY > Math.max(heroEnd, 48))
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  window.addEventListener('load', update)
}

function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]')
  if (!bar) return

  const update = (): void => {
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0)
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0
    bar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`
  }

  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  window.addEventListener('load', update)

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
  }
}

function initReveals(): void {
  const elements = query<HTMLElement>('[data-reveal]')
  if (typeof IntersectionObserver === 'undefined') {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' })

  elements.forEach((element) => observer.observe(element))
}

function initImageZoom(): void {
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (!finePointer.matches || reducedMotion.matches) return

  query<HTMLElement>('.media-zoom').forEach((frame) => {
    const image = frame.querySelector<HTMLElement>('.zoom-target')
    if (!image) return

    let frameId = 0
    let originX = 50
    let originY = 50

    const updateOrigin = (): void => {
      frameId = 0
      image.style.transformOrigin = `${originX}% ${originY}%`
    }

    const setOrigin = (event: PointerEvent): void => {
      if (event.pointerType === 'touch') return
      const rect = frame.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      originX = Math.min(Math.max(((event.clientX - rect.left) / rect.width) * 100, 0), 100)
      originY = Math.min(Math.max(((event.clientY - rect.top) / rect.height) * 100, 0), 100)
      if (!frameId) frameId = window.requestAnimationFrame(updateOrigin)
    }

    const enter = (event: PointerEvent): void => {
      if (event.pointerType === 'touch') return
      setOrigin(event)
      frame.classList.add('is-pinching')
    }

    const leave = (): void => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
      }
      frame.classList.remove('is-pinching')
      image.style.transformOrigin = '50% 50%'
    }

    frame.addEventListener('pointerenter', enter)
    frame.addEventListener('pointermove', setOrigin)
    frame.addEventListener('pointerleave', leave)
    frame.addEventListener('pointercancel', leave)
  })
}

function initProjectsScroll(): void {
  const section = document.querySelector<HTMLElement>('[data-projects-scroll]')
  if (!section) return

  const items = query<HTMLElement>('[data-scroll-item]', section)
  const images = query<HTMLElement>('[data-scroll-image]', section)
  const count = section.querySelector<HTMLElement>('[data-scroll-count]')
  const title = section.querySelector<HTMLElement>('[data-scroll-title]')
  if (!items.length) return

  const activate = (index: number): void => {
    items.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index))
    images.forEach((image, imageIndex) => image.classList.toggle('is-active', imageIndex === index))
    if (count) count.textContent = String(index + 1).padStart(2, '0')
    if (title) title.textContent = items[index].querySelector('h3')?.textContent ?? ''
  }

  if (typeof IntersectionObserver === 'undefined') {
    window.addEventListener('scroll', () => {
      const midpoint = window.innerHeight / 2
      let closest = 0
      let distance = Number.POSITIVE_INFINITY
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const itemDistance = Math.abs(rect.top + rect.height / 2 - midpoint)
        if (itemDistance < distance) {
          distance = itemDistance
          closest = index
        }
      })
      activate(closest)
    }, { passive: true })
    return
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
    if (!visible.length) return
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
    const target = visible[0].target as HTMLElement
    const index = Number(target.dataset.index ?? 0)
    if (!Number.isNaN(index)) activate(index)
  }, { rootMargin: '-44% 0px -44% 0px', threshold: 0 })

  items.forEach((item) => observer.observe(item))
}

function initEquipmentPanels(): void {
  const overlay = document.querySelector<HTMLElement>('[data-equipment-overlay]')
  const panel = document.querySelector<HTMLElement>('[data-equipment-panel]')
  if (!overlay || !panel) return

  const views = query<HTMLElement>('[data-panel-view]', panel)
  const triggers = query<HTMLElement>('[data-equipment-open]')
  const closeButton = panel.querySelector<HTMLButtonElement>('[data-equipment-close]')
  const panelLabel = panel.querySelector<HTMLElement>('[data-equipment-panel-label]')
  let currentId = ''
  let lastFocused: HTMLElement | null = null

  const activateStory = (view: HTMLElement, index: number): void => {
    const items = query<HTMLElement>('[data-story-item]', view)
    const images = query<HTMLElement>('[data-story-image]', view)
    const count = view.querySelector<HTMLElement>('[data-story-count]')
    const name = view.querySelector<HTMLElement>('[data-story-name]')
    if (!items.length) return

    const activeIndex = Math.min(Math.max(index, 0), items.length - 1)
    items.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === activeIndex))
    images.forEach((image, imageIndex) => image.classList.toggle('is-active', imageIndex === activeIndex))
    if (count) count.textContent = String(activeIndex + 1).padStart(2, '0')
    if (name) name.textContent = items[activeIndex].querySelector('h3')?.textContent ?? ''
  }

  const updateStory = (view: HTMLElement): void => {
    const items = query<HTMLElement>('[data-story-item]', view)
    if (!items.length) return

    const panelRect = panel.getBoundingClientRect()
    const triggerLine = panelRect.top + panelRect.height * 0.58
    let nextIndex = 0
    items.forEach((item, index) => {
      if (item.getBoundingClientRect().top <= triggerLine) nextIndex = index
    })
    activateStory(view, nextIndex)
  }

  const updateActiveView = (): void => {
    const view = views.find((item) => item.classList.contains('is-open'))
    if (view) updateStory(view)
  }

  const writeUrl = (id: string | null): void => {
    const url = new URL(window.location.href)
    if (id) url.searchParams.set('category', id)
    else url.searchParams.delete('category')
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }

  const openPanel = (id: string, writeHistory = true): HTMLElement | undefined => {
    const view = views.find((item) => item.dataset.panelView === id)
    if (!view) return undefined

    if (!currentId) lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    currentId = id
    views.forEach((item) => item.classList.toggle('is-open', item === view))
    overlay.setAttribute('aria-hidden', 'false')
    overlay.classList.add('is-open')
    panel.classList.add('is-open')
    document.body.classList.add('equipment-open')
    if (panelLabel) panelLabel.textContent = view.querySelector('h2')?.textContent ?? 'Equipment catalogue'
    panel.scrollTop = 0
    activateStory(view, 0)
    if (writeHistory) writeUrl(id)
    window.setTimeout(() => closeButton?.focus(), 40)
    return view
  }

  const closePanel = (writeHistory = true): void => {
    if (!currentId) return
    currentId = ''
    views.forEach((item) => item.classList.remove('is-open'))
    overlay.setAttribute('aria-hidden', 'true')
    overlay.classList.remove('is-open')
    panel.classList.remove('is-open')
    document.body.classList.remove('equipment-open')
    if (writeHistory) writeUrl(null)
    lastFocused?.focus()
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const id = trigger.dataset.category
      if (!id) return
      event.preventDefault()
      openPanel(id)
    })
  })

  closeButton?.addEventListener('click', () => closePanel())
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closePanel()
  })
  panel.addEventListener('scroll', updateActiveView, { passive: true })
  window.addEventListener('resize', updateActiveView)
  window.addEventListener('popstate', () => {
    const id = new URLSearchParams(window.location.search).get('category')
    if (id && views.some((view) => view.dataset.panelView === id)) openPanel(id, false)
    else closePanel(false)
  })

  const initial = new URLSearchParams(window.location.search).get('category')
  if (initial && views.some((view) => view.dataset.panelView === initial)) openPanel(initial, false)
}

function initActiveNav(): void {
  const path = window.location.pathname
  query<HTMLElement>('[data-nav-link]').forEach((link) => {
    const isBusiness =
      link.dataset.megaTrigger === 'businesses' &&
      (path.startsWith('/businesses/') || path.startsWith('/projects/') || path.startsWith('/work/'))
    const href = link.getAttribute('href')
    const isDirect = Boolean(href && href !== '/' && path.startsWith(href))
    const active = isBusiness || isDirect
    link.classList.toggle('is-active', active)
    if (active) link.setAttribute('aria-current', isBusiness ? 'true' : 'page')
    else link.removeAttribute('aria-current')
  })
}

export function initInteractions(): void {
  initMegaMenus()
  initMobileMenu()
  initScrollState()
  initScrollProgress()
  initReveals()
  initImageZoom()
  initProjectsScroll()
  initEquipmentPanels()
  initActiveNav()

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return

    const openMega = document.querySelector<HTMLElement>('[data-mega-panel].is-open')
    const restoreMegaFocus = Boolean(openMega?.contains(document.activeElement))
    const megaTrigger = openMega?.dataset.mega
      ? document.querySelector<HTMLElement>(`[data-mega-trigger="${openMega.dataset.mega}"]`)
      : null
    setMega(null, false)
    if (restoreMegaFocus && megaTrigger) {
      megaTrigger.focus()
      setMega(null, false)
    }

    setMobileMenu(false)

    const overlay = document.querySelector<HTMLElement>('[data-equipment-overlay]')
    if (overlay?.classList.contains('is-open')) {
      overlay.querySelector<HTMLButtonElement>('[data-equipment-close]')?.click()
    }
  })
}
