import { defineNuxtConfig } from 'nuxt/config'
import invertColor from './utils/invert-color'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@unocss/nuxt',
  '@nuxt/image-edge',],
  css: ['@unocss/reset/tailwind.css'],
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
        "primary": {
          DEFAULT: "#1A1A1A",
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A3A3A3",
          300: "#757575",
          400: "#474747",
          500: "#1A1A1A",
          600: "#141414",
          700: "#0F0F0F",
          800: "#0A0A0A",
          900: "#050505"
        },
        nav: '#343a40',
      },
    },
    shortcuts: [
      {
        btn: 'py-2 px-4 px-6 py-2.5',
        'btn-link':
          'bg-transparent',
        'form-control': 'block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
        'form-group': 'mb-6',
        'form-label': 'inline-block mb-2 text-gray-700',
      },
      // dynamic shortcuts
      [
        /^btn-(.*)$/,
        ([, c], { theme }) => {
          const color = theme.colors[c]
          const sm = 'px-4 py-1.5'
          const md = 'px-6 py-2.5'
          const lg = 'px-8 py-3 text-md'
          const sizes = { sm, md, lg }
          const size = sizes[c]
          if (size) {
            return size
          }
          const bg = color
            ? `bg-${c}-400 hover:bg-${c}-700 focus:bg-${c}-700 active:bg-${c}-800`
            : ''
          const text = color ? `text-${invertColor(color.DEFAULT ?? color, true)}` : ''
          return `${bg} ${text} inline-block font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`
        },
      ],
    ],
  },
})
