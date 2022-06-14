import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  buildModules: [
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    webFonts: {
      fonts: {
        brand: [
          { name: 'Open Sans' },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    },
    icons: {
      scale: 1.2,
    },
    theme: {
      colors: {
        primary: '#1a1a1a',
        nav: '#343a40',
      },
    },
    shortcuts: [
      {
        btn: 'py-2 px-4 text-xs rounded-lg px-6 py-2.5',
        'btn-link':
          'bg-transparent',
      },
      // dynamic shortcuts
      [
        /^btn-(.*)$/,
        ([, c], { theme }) => {
          const isColor = theme.colors[c]
          const sm = 'px-4 py-1.5'
          const md = 'px-6 py-2.5'
          const lg = 'px-8 py-3 text-md'
          const sizes = { sm, md, lg }
          const size = sizes[c]
          if (size) {
            return size
          }
          const bg = isColor
            ? `bg-${c}-400 hover:bg-${c}-700 focus:bg-${c}-700 active:bg-${c}-800`
            : ''
          const text = isColor ? `text-${c}-100` : ''
          return `${bg} ${text} inline-block font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`
        },
      ],
    ],
  },
})
