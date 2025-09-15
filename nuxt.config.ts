import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  ssr: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt', '@nuxt/image'],
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  }
})