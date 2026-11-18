import './styles.css'
import { renderFooter, renderHeader } from './components'
import { enquiryForms, getBrandingProject, getEquipmentCategory } from './data'
import { initForms, renderFormPage } from './forms'
import { initInteractions } from './interactions'
import { renderPage } from './pages'

const headerRoot = document.querySelector<HTMLElement>('[data-header-root]')
const footerRoot = document.querySelector<HTMLElement>('[data-footer-root]')
const pageContent = document.querySelector<HTMLElement>('[data-page-content]')

if (!headerRoot || !footerRoot || !pageContent) {
  throw new Error('Page shell is missing')
}

headerRoot.innerHTML = renderHeader()
footerRoot.innerHTML = renderFooter()

const page = document.body.dataset.page ?? 'home'
const variant = document.body.dataset.legal
const formKey = document.body.dataset.form
const formConfig = formKey ? enquiryForms[formKey] : undefined
const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

if (page === 'branding-project') {
  const project = getBrandingProject(new URLSearchParams(window.location.search).get('project'))
  if (project) {
    document.title = `${project.title} | DUZZA GROUP`
    if (description) description.content = project.summary
  }
}

if (page === 'equipment-detail') {
  const category = getEquipmentCategory(new URLSearchParams(window.location.search).get('item'))
  if (category) {
    document.title = `${category.title} | DUZZA Projects`
    if (description) description.content = category.description
  }
}

pageContent.innerHTML = formConfig ? renderFormPage(formConfig) : renderPage(page, variant)

initInteractions()
initForms()
