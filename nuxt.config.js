import { createSEOMeta } from './exports/seo'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'P.Stoop Bouwbedrijf | Made',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      ...createSEOMeta({
        title: 'Een jong en ambitieus bedrijf, maar wél met 20 jarenlange ervaring onder de pet. Wij zetten ons voor de volle 100% in. | P.Stoop Bouwbedrijf',
        description: 'Een jong en ambitieus bedrijf, maar wél met 20 jarenlange ervaring onder de pet. Wij zetten ons voor de volle 100% in.',
        image: '/imageLarge.jpg'
      }),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'styles/main.scss',
    'node_modules/bootstrap-icons/font/bootstrap-icons.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
