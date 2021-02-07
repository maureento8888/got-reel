export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/got-reel/github.io/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Game of Thrones Character Reel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find the Game of Thrones characters' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Nuxt loader configurations (https://ko.nuxtjs.org/docs/2.x/features/loading#customizing-the-progress-bar)
  loading: {
    continuous: true
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/pwa'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA configuration options (https://pwa.nuxtjs.org/icon)
  pwa: {
    // meta: {
    //   mobileApp: {
    //     default: true,
    //     meta: "mobile-web-app-capable"
    //   },
    //   manifest: {
    //     short_name: "GoT Reel",
    //     name: "Game of Thrones | Character Reel",
    //     icons: [
    //       {
    //         "src": "/images/",
    //         "type": "image/png",
    //         "sizes": "192x192"
    //       },
    //       {
    //         "src": "/images/",
    //         "type": "image/png",
    //         "sizes": "512x512"
    //       },
    //     ],
    //     "display": "standalone",
    //     "theme_color": "#002238",
    //     "background_color": "",
    //     "description": "List of Game of Thrones Characters",
    //   }
    // }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
