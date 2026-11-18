import {
  formatIncompletePhoneNumber,
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode
} from 'libphonenumber-js'
import { escapeHtml, buttonLink } from './components'
import { equipmentCategories, equipmentItems, type EquipmentItem, type EquipmentQuestion, type FormConfig, type FormField } from './data'

type Country = {
  code: CountryCode
  name: string
  dial: string
}

const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
const countries: Country[] = getCountries()
  .map((code) => ({
    code,
    name: regionNames.of(code) ?? code,
    dial: `+${getCountryCallingCode(code)}`
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
const countriesByCode = new Map(countries.map((item) => [item.code, item]))
const defaultCountry = countriesByCode.get('NG') ?? countries[0]

function must<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector)
  if (!element) throw new Error(`Missing required element: ${selector}`)
  return element
}

function renderPhoneField(field: FormField): string {
  const id = `field-${field.name}`
  const country = defaultCountry

  return `
    <div class="field phone-field" data-phone-field data-field-name="${field.name}">
      <label id="${id}-label" for="${id}">${escapeHtml(field.label)}${field.required ? ' *' : ''}</label>
      <div class="phone-wrap">
        <div class="phone-control" data-phone-control data-invalid="false">
          <button class="phone-country-button" type="button" aria-label="Select country and dialling code" aria-expanded="false" aria-controls="${id}-list" data-phone-country-button>
            <span class="phone-country-flag flag:${country.code}" data-phone-flag aria-hidden="true"></span>
            <span class="phone-country-name" data-phone-country-name>${escapeHtml(country.name)}</span>
            <span class="phone-country-code" data-phone-country-code>${escapeHtml(country.dial)}</span>
          </button>
          <input id="${id}" name="${field.name}" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="802 123 4567" aria-describedby="${id}-hint ${id}-error" aria-invalid="false" data-required="${field.required ? 'true' : 'false'}" data-phone-input>
        </div>
        <div class="phone-popover" data-phone-popover hidden>
          <input class="phone-search" type="search" placeholder="Search country" aria-label="Search country" aria-controls="${id}-list" aria-autocomplete="list" aria-expanded="false" data-phone-search>
          <ul class="phone-list" id="${id}-list" role="listbox" aria-label="Countries" data-phone-list></ul>
        </div>
      </div>
      <p class="field-hint" id="${id}-hint">Select a country, then enter the local number.</p>
      <p class="field-error" id="${id}-error" data-phone-error data-visible="false"></p>
      <input type="hidden" name="${field.name}Country" value="${country.code}" data-phone-country-value>
      <input type="hidden" name="${field.name}DialCode" value="${country.dial}" data-phone-dial-value>
      <input type="hidden" name="${field.name}E164" value="" data-phone-e164>
    </div>
  `
}

function renderField(field: FormField): string {
  if (field.type === 'phone') return renderPhoneField(field)

  const id = `field-${field.name}`
  const fullClass = field.full ? ' field--full' : ''
  const required = field.required ? ' required' : ''
  const describedBy = field.hint ? ` aria-describedby="${id}-hint"` : ''
  const hint = field.hint ? `<p class="field-hint" id="${id}-hint">${escapeHtml(field.hint)}</p>` : ''

  if (field.type === 'checkboxes') {
    return `
      <fieldset class="field${fullClass}" data-required-group="${field.required ? 'true' : 'false'}">
        <legend>${escapeHtml(field.label)}${field.required ? ' *' : ''}</legend>
        <div class="checkbox-grid">
          ${(field.options ?? []).map((option, index) => `
            <label class="checkbox-option" for="${id}-${index}">
              <input id="${id}-${index}" type="checkbox" name="${field.name}" value="${escapeHtml(option.value)}">
              <span>${escapeHtml(option.label)}</span>
            </label>
          `).join('')}
        </div>
        <p class="field-error" data-group-error data-visible="false">Select at least one option.</p>
      </fieldset>
    `
  }

  if (field.type === 'select') {
    return `
      <div class="field${fullClass}">
        <label for="${id}">${escapeHtml(field.label)}${field.required ? ' *' : ''}</label>
        <select id="${id}" name="${field.name}"${required}${describedBy} data-select-field${field.prefillFromQuery ? ` data-prefill="${field.prefillFromQuery}"` : ''}>
          <option value="">Select an option</option>
          ${(field.options ?? []).map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join('')}
        </select>
        ${hint}
        <p class="field-error" data-field-error data-visible="false"></p>
      </div>
    `
  }

  if (field.type === 'textarea') {
    return `
      <div class="field${fullClass}">
        <label for="${id}">${escapeHtml(field.label)}${field.required ? ' *' : ''}</label>
        <textarea id="${id}" name="${field.name}" placeholder="${escapeHtml(field.placeholder ?? '')}"${required}${describedBy}></textarea>
        ${hint}
        <p class="field-error" data-field-error data-visible="false"></p>
      </div>
    `
  }

  if (field.type === 'file') {
    const size = field.maxSizeMB ? ` data-max-size="${field.maxSizeMB}"` : ''
    const accept = field.accept ? ` accept="${field.accept}"` : ''
    return `
      <div class="field${fullClass}">
        <label for="${id}">${escapeHtml(field.label)}${field.required ? ' *' : ''}</label>
        <input id="${id}" name="${field.name}" type="file"${accept}${size}${describedBy}>
        ${hint}
        <p class="field-error" data-field-error data-visible="false"></p>
      </div>
    `
  }

  return `
    <div class="field${fullClass}">
      <label for="${id}">${escapeHtml(field.label)}${field.required ? ' *' : ''}</label>
      <input id="${id}" name="${field.name}" type="${field.type}" placeholder="${escapeHtml(field.placeholder ?? '')}"${required}${describedBy}>
      ${hint}
      <p class="field-error" data-field-error data-visible="false"></p>
    </div>
  `
}

function renderEquipmentQuestion(question: EquipmentQuestion, index: number): string {
  const id = `equipment-question-${index}`
  const label = `${escapeHtml(question.label)} *`
  const describedBy = question.placeholder ? ` aria-describedby="${id}-hint"` : ''
  const hint = question.placeholder ? `<p class="field-hint" id="${id}-hint">${escapeHtml(question.placeholder)}</p>` : ''
  const error = '<p class="field-error" data-field-error data-visible="false"></p>'

  if (question.type === 'select') {
    return `
      <div class="field" data-equipment-question>
        <label for="${id}">${label}</label>
        <select id="${id}" name="equipment_${escapeHtml(question.name)}" required${describedBy} data-equipment-question-control>
          <option value="">Select an option</option>
          ${(question.options ?? []).map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join('')}
        </select>
        ${hint}${error}
      </div>
    `
  }

  if (question.type === 'textarea') {
    return `
      <div class="field field--full" data-equipment-question>
        <label for="${id}">${label}</label>
        <textarea id="${id}" name="equipment_${escapeHtml(question.name)}" placeholder="${escapeHtml(question.placeholder ?? '')}" required${describedBy} data-equipment-question-control></textarea>
        ${hint}${error}
      </div>
    `
  }

  return `
    <div class="field" data-equipment-question>
      <label for="${id}">${label}</label>
      <input id="${id}" name="equipment_${escapeHtml(question.name)}" type="text" placeholder="${escapeHtml(question.placeholder ?? '')}" required${describedBy} data-equipment-question-control>
      ${hint}${error}
    </div>
  `
}

function renderForm(config: FormConfig): string {
  return `
    <form class="enquiry-form" data-enquiry-form data-form-id="${config.id}" novalidate>
      <div class="error-summary" role="alert" data-error-summary></div>
      <div class="form-grid">
        ${config.fields.map(renderField).join('')}
        <div class="field field--full dynamic-equipment-fields" data-dynamic-equipment-fields></div>
      </div>
      <div class="honeypot" aria-hidden="true">
        <label for="${config.id}-website">Website</label>
        <input id="${config.id}-website" name="company_website" type="text" tabindex="-1" autocomplete="off">
      </div>
      <div class="form-actions">
        <button class="button button-primary" type="submit">Prepare enquiry <span aria-hidden="true">→</span></button>
      </div>
      <div class="form-status" role="status" data-form-status data-visible="false">
        <h3>Enquiry prepared</h3>
        <p>${escapeHtml(config.nextStep)}</p>
      </div>
    </form>
  `
}

export function renderFormPage(config: FormConfig): string {
  return `
    ${pageIntroWithActions(config)}
    <section class="section-pad">
      <div class="shell">
        <div class="form-shell">
          <div class="form-aside">
            <div>
              <p class="eyebrow">${escapeHtml(config.eyebrow)}</p>
              <h2 class="display-sm" style="margin-top:1rem">What happens next</h2>
              <p class="body-copy" style="margin-top:1rem">${escapeHtml(config.nextStep)}</p>
            </div>
            <div>
              <p class="eyebrow">Other routes</p>
              <div class="hero-actions" style="margin-top:1rem">
                ${buttonLink('Project quote', '/enquiries/projects/', 'outline')}
                ${buttonLink('Branding brief', '/enquiries/branding/', 'outline')}
              </div>
            </div>
          </div>
          <div class="form-main">${renderForm(config)}</div>
        </div>
      </div>
    </section>
  `
}

function pageIntroWithActions(config: FormConfig): string {
  return `
    <section class="page-intro">
      <div class="shell">
        <p class="eyebrow">${escapeHtml(config.eyebrow)}</p>
        <h1>${escapeHtml(config.title)}</h1>
        <p class="lede body-copy">${escapeHtml(config.intro)}</p>
      </div>
    </section>
  `
}

function normaliseNationalNumber(raw: string, code: CountryCode): string {
  let value = raw.trim()
  if (value.startsWith('+')) {
    const parsed = parsePhoneNumberFromString(value)
    value = parsed ? parsed.nationalNumber : value.replace(/^\+\d+/, '')
  }
  return formatIncompletePhoneNumber(value, code)
}

function initPhoneField(root: HTMLElement): void {
  const button = must<HTMLButtonElement>(root, '[data-phone-country-button]')
  const flag = must<HTMLElement>(root, '[data-phone-flag]')
  const countryName = must<HTMLElement>(root, '[data-phone-country-name]')
  const dialCode = must<HTMLElement>(root, '[data-phone-country-code]')
  const input = must<HTMLInputElement>(root, '[data-phone-input]')
  const control = must<HTMLElement>(root, '[data-phone-control]')
  const popover = must<HTMLElement>(root, '[data-phone-popover]')
  const search = must<HTMLInputElement>(root, '[data-phone-search]')
  const list = must<HTMLUListElement>(root, '[data-phone-list]')
  const countryValue = must<HTMLInputElement>(root, '[data-phone-country-value]')
  const dialValue = must<HTMLInputElement>(root, '[data-phone-dial-value]')
  const e164Value = must<HTMLInputElement>(root, '[data-phone-e164]')
  const error = must<HTMLElement>(root, '[data-phone-error]')
  const form = root.closest('form')
  const listId = list.id
  let selected = countriesByCode.get((countryValue.value as CountryCode)) ?? defaultCountry
  let activeIndex = -1
  let visibleCountries: Country[] = []

  const setError = (message: string): void => {
    error.textContent = message
    error.dataset.visible = message ? 'true' : 'false'
    input.setAttribute('aria-invalid', message ? 'true' : 'false')
    control.dataset.invalid = message ? 'true' : 'false'
  }

  const updateE164 = (): void => {
    const parsed = parsePhoneNumberFromString(input.value, selected.code)
    e164Value.value = parsed && parsed.isValid() ? parsed.number : ''
  }

  const validate = (): string => {
    setError('')
    updateE164()

    if (!input.value.trim()) {
      const message = input.dataset.required === 'true' ? 'Enter a phone number.' : ''
      if (message) setError(message)
      return message
    }

    if (!isValidPhoneNumber(input.value, selected.code)) {
      const message = `Enter a valid number for ${selected.name}.`
      setError(message)
      return message
    }

    return ''
  }

  const syncCountryField = (): void => {
    if (!form) return
    const countryField = form.querySelector<HTMLSelectElement>('[name="country"]')
    if (!countryField) return
    const match = Array.from(countryField.options).some((option) => option.value === selected.code)
    countryField.value = match ? selected.code : 'OTHER'
    countryField.dispatchEvent(new Event('change', { bubbles: true }))
  }

  const setCountry = (country: Country, focusInput = true, skipValidation = false): void => {
    selected = country
    button.setAttribute(
      'aria-label',
      `Selected country: ${country.name}, dialling code ${country.dial}. Select country and dialling code`
    )
    flag.className = `phone-country-flag flag:${country.code}`
    countryName.textContent = country.name
    dialCode.textContent = country.dial
    countryValue.value = country.code
    dialValue.value = country.dial
    input.value = normaliseNationalNumber(input.value, country.code)
    syncCountryField()
    if (!skipValidation) validate()
    closePopover()
    if (focusInput) input.focus()
  }

  const setActive = (index: number): void => {
    const options = Array.from(list.querySelectorAll<HTMLElement>('[data-phone-option]'))
    if (!options.length) return
    activeIndex = (index + options.length) % options.length
    options.forEach((option, optionIndex) => {
      option.setAttribute('aria-selected', optionIndex === activeIndex ? 'true' : 'false')
    })
    const active = options[activeIndex]
    search.setAttribute('aria-activedescendant', active.id)
    active.scrollIntoView({ block: 'nearest' })
  }

  const renderOptions = (query: string): void => {
    const needle = query.trim().toLowerCase()
    visibleCountries = countries
      .filter((country) => {
        return (
          !needle ||
          country.name.toLowerCase().includes(needle) ||
          country.code.toLowerCase().includes(needle) ||
          country.dial.includes(needle)
        )
      })
      .slice(0, 80)

    list.replaceChildren()

    if (!visibleCountries.length) {
      const empty = document.createElement('li')
      empty.className = 'phone-option'
      empty.textContent = 'No countries found'
      list.append(empty)
      return
    }

    visibleCountries.forEach((country, index) => {
      const option = document.createElement('li')
      option.className = 'phone-option'
      option.id = `${listId}-option-${index}`
      option.dataset.phoneOption = country.code
      option.setAttribute('role', 'option')
      option.setAttribute('aria-selected', country.code === selected.code ? 'true' : 'false')

      const optionFlag = document.createElement('span')
      optionFlag.className = `phone-option-flag flag:${country.code}`
      optionFlag.setAttribute('aria-hidden', 'true')

      const name = document.createElement('span')
      name.textContent = country.name

      const code = document.createElement('span')
      code.textContent = country.dial
      code.className = 'phone-country-code'

      option.append(optionFlag, name, code)
      list.append(option)
    })

    activeIndex = visibleCountries.findIndex((country) => country.code === selected.code)
    if (activeIndex >= 0) setActive(activeIndex)
  }

  const openPopover = (): void => {
    popover.hidden = false
    button.setAttribute('aria-expanded', 'true')
    search.setAttribute('aria-expanded', 'true')
    search.value = ''
    renderOptions('')
    search.focus()
  }

  function closePopover(): void {
    popover.hidden = true
    button.setAttribute('aria-expanded', 'false')
    search.setAttribute('aria-expanded', 'false')
    search.removeAttribute('aria-activedescendant')
  }

  button.addEventListener('click', () => {
    if (popover.hidden) openPopover()
    else closePopover()
  })

  search.addEventListener('input', () => renderOptions(search.value))

  search.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive(activeIndex + 1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive(activeIndex - 1)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const country = visibleCountries[activeIndex]
      if (country) setCountry(country)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      closePopover()
      button.focus()
    }
  })

  list.addEventListener('click', (event) => {
    const option = (event.target as HTMLElement).closest<HTMLElement>('[data-phone-option]')
    if (!option) return
    const country = countriesByCode.get(option.dataset.phoneOption as CountryCode)
    if (country) setCountry(country)
  })

  input.addEventListener('input', () => {
    input.value = normaliseNationalNumber(input.value, selected.code)
    updateE164()
    if (error.dataset.visible === 'true') validate()
  })

  input.addEventListener('blur', () => {
    if (input.value.trim()) validate()
  })

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closePopover()
  })

  if (form) {
    const countryField = form.querySelector<HTMLSelectElement>('[name="country"]')
    countryField?.addEventListener('change', () => {
      const code = countryField.value as CountryCode
      const country = countriesByCode.get(code)
      if (country && country.code !== selected.code) setCountry(country)
    })
  }

  setCountry(selected, false, true)
}

function validateGroups(form: HTMLFormElement): number {
  let count = 0
  form.querySelectorAll<HTMLFieldSetElement>('[data-required-group="true"]').forEach((group) => {
    const error = group.querySelector<HTMLElement>('[data-group-error]')
    const checked = group.querySelector<HTMLInputElement>('input:checked')
    if (!checked && error) {
      error.dataset.visible = 'true'
      count += 1
    } else if (error) {
      error.dataset.visible = 'false'
    }
  })
  return count
}

function validateFiles(form: HTMLFormElement): number {
  let count = 0
  form.querySelectorAll<HTMLInputElement>('input[type="file"][data-max-size]').forEach((input) => {
    const error = input.parentElement?.querySelector<HTMLElement>('[data-field-error]')
    const maxSize = Number(input.dataset.maxSize) * 1024 * 1024
    const file = input.files?.[0]
    let message = ''

    if (file && file.size > maxSize) {
      message = `Choose a file smaller than ${input.dataset.maxSize}MB.`
    }

    if (error) {
      error.textContent = message
      error.dataset.visible = message ? 'true' : 'false'
    }
    input.setAttribute('aria-invalid', message ? 'true' : 'false')
    if (message) count += 1
  })
  return count
}

function initDynamicEquipmentFields(form: HTMLFormElement): void {
  if (form.dataset.formId !== 'equipment-enquiry') return

  const categorySelect = form.querySelector<HTMLSelectElement>('[name="equipment"]')
  const modelSelect = form.querySelector<HTMLSelectElement>('[name="equipmentModel"]')
  const target = form.querySelector<HTMLElement>('[data-dynamic-equipment-fields]')
  if (!categorySelect || !modelSelect || !target) return

  const categoryTitleFor = (item: EquipmentItem): string =>
    equipmentCategories.find((category) => category.id === item.categoryId)?.title ?? ''

  const updateModelOptions = (categoryTitle: string, selectedName: string): void => {
    const items = categoryTitle
      ? equipmentItems.filter((item) => categoryTitleFor(item) === categoryTitle)
      : equipmentItems
    modelSelect.innerHTML = `
      <option value="">Select equipment</option>
      ${items.map((item) => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)} — ${escapeHtml(item.manufacturer)}</option>`).join('')}
    `
    if (selectedName && items.some((item) => item.name === selectedName)) modelSelect.value = selectedName
  }

  const renderQuestions = (item: EquipmentItem | undefined): void => {
    if (!item) {
      target.innerHTML = ''
      return
    }

    target.innerHTML = `
      <div class="dynamic-equipment-heading">
        <p class="eyebrow">Equipment-specific detail</p>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </div>
      <div class="dynamic-equipment-grid">
        ${item.questions.map(renderEquipmentQuestion).join('')}
      </div>
    `
  }

  const syncFromModel = (preserveOptions = false): void => {
    const item = equipmentItems.find((candidate) => candidate.name === modelSelect.value)
    if (!item) {
      renderQuestions(undefined)
      return
    }

    const categoryTitle = categoryTitleFor(item)
    if (categoryTitle) categorySelect.value = categoryTitle
    if (!preserveOptions) updateModelOptions(categoryTitle, item.name)
    renderQuestions(item)
  }

  categorySelect.addEventListener('change', () => {
    updateModelOptions(categorySelect.value, '')
    renderQuestions(undefined)
  })

  modelSelect.addEventListener('change', () => syncFromModel())
  syncFromModel(true)
}

function initForm(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>('[data-phone-field]').forEach(initPhoneField)

  const params = new URLSearchParams(window.location.search)
  form.querySelectorAll<HTMLSelectElement>('[data-prefill]').forEach((select) => {
    const value = params.get(select.dataset.prefill ?? '')
    if (value && Array.from(select.options).some((option) => option.value === value)) {
      select.value = value
    }
  })

  initDynamicEquipmentFields(form)

  const errorSummary = form.querySelector<HTMLElement>('[data-error-summary]')
  const status = form.querySelector<HTMLElement>('[data-form-status]')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (status) status.dataset.visible = 'false'

    form.querySelectorAll<HTMLElement>('[data-field-error]').forEach((error) => {
      error.dataset.visible = 'false'
    })
    form.querySelectorAll<HTMLElement>('[data-phone-error]').forEach((error) => {
      error.dataset.visible = 'false'
      error.textContent = ''
    })
    form.querySelectorAll<HTMLElement>('[data-phone-control]').forEach((control) => {
      control.dataset.invalid = 'false'
    })

    let errorCount = validateGroups(form) + validateFiles(form)

    form.querySelectorAll<HTMLElement>('[data-phone-field]').forEach((field) => {
      const input = field.querySelector<HTMLInputElement>('[data-phone-input]')
      const error = field.querySelector<HTMLElement>('[data-phone-error]')
      const control = field.querySelector<HTMLElement>('[data-phone-control]')
      const countryValue = field.querySelector<HTMLInputElement>('[data-phone-country-value]')
      const countryName = field.querySelector<HTMLElement>('[data-phone-country-name]')
      if (!input || !error || !control || !countryValue) return

      let message = ''
      if (!input.value.trim() && input.dataset.required === 'true') {
        message = 'Enter a phone number.'
      } else if (input.value.trim() && !isValidPhoneNumber(input.value, countryValue.value as CountryCode)) {
        message = `Enter a valid number for ${countryName?.textContent ?? 'the selected country'}.`
      }

      error.textContent = message
      error.dataset.visible = message ? 'true' : 'false'
      input.setAttribute('aria-invalid', message ? 'true' : 'false')
      control.dataset.invalid = message ? 'true' : 'false'
      if (message) errorCount += 1
    })

    form.querySelectorAll<HTMLElement>('input:not([type="hidden"]):not([type="file"]):not([type="checkbox"]):not([data-phone-input]), select, textarea').forEach((element) => {
      const control = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      if (control.hasAttribute('data-phone-input')) return
      const error = control.parentElement?.querySelector<HTMLElement>('[data-field-error]')
      if (!control.checkValidity()) {
        control.setAttribute('aria-invalid', 'true')
        if (error) error.dataset.visible = 'true'
        errorCount += 1
      } else {
        control.setAttribute('aria-invalid', 'false')
      }
    })

    if (errorCount > 0) {
      if (errorSummary) {
        errorSummary.textContent = `Please check ${errorCount} field${errorCount === 1 ? '' : 's'} before continuing.`
        errorSummary.dataset.visible = 'true'
      }
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"], [data-visible="true"]')
      firstInvalid?.focus()
      return
    }

    const honeypot = form.querySelector<HTMLInputElement>('[name="company_website"]')
    if (honeypot?.value) {
      if (status) status.dataset.visible = 'true'
      return
    }

    if (errorSummary) errorSummary.dataset.visible = 'false'
    if (status) {
      status.dataset.visible = 'true'
      status.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  })
}

export function initForms(): void {
  document.querySelectorAll<HTMLFormElement>('[data-enquiry-form]').forEach(initForm)
}
