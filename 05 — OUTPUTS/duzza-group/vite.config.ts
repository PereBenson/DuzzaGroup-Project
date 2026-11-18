import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        businesses: resolve(root, 'businesses/index.html'),
        projects: resolve(root, 'businesses/projects/index.html'),
        branding: resolve(root, 'businesses/branding/index.html'),
        fashion: resolve(root, 'businesses/fashion/index.html'),
        food: resolve(root, 'businesses/food/index.html'),
        work: resolve(root, 'work/index.html'),
        projectDetail: resolve(root, 'work/project/index.html'),
        about: resolve(root, 'about/index.html'),
        contact: resolve(root, 'contact/index.html'),
        equipment: resolve(root, 'projects/equipment/index.html'),
        equipmentDetail: resolve(root, 'projects/equipment/detail/index.html'),
        enquiryProjects: resolve(root, 'enquiries/projects/index.html'),
        enquirySurvey: resolve(root, 'enquiries/survey/index.html'),
        enquiryEquipment: resolve(root, 'enquiries/equipment/index.html'),
        enquiryBranding: resolve(root, 'enquiries/branding/index.html'),
        enquiryGeneral: resolve(root, 'enquiries/general/index.html'),
        privacy: resolve(root, 'legal/privacy/index.html'),
        terms: resolve(root, 'legal/terms/index.html'),
        cookies: resolve(root, 'legal/cookies/index.html')
      }
    }
  }
})
