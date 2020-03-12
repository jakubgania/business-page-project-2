const BASE_PATH = process.env.BASE_PATH || '/'

export default {
  mode: 'universal',

  router: {
    base: BASE_PATH
  },
  /*
   ** Headers of the page 
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        conent: 'https://okna-system-serwis.pl/okna-system-serwis.png'
      }
    ],
    link: [
      {
        rel: 'icon', type: 'image/png', href: `${BASE_PATH}/favicon-32x32.png`, sizes: '32x32',
      },
      {
        rel: 'icon', type: 'image/png', href: `${BASE_PATH}/favicon-16x16.png`, sizes: '16x16',
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'node_modules/material-design-icons/iconfont/material-icons.css',
    'aos/dist/aos.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src:"~/plugins/aos",
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],

  pwa: {
    workbox: {
      assetsURLPattern: `${BASE_PATH}/_nuxt/`,
      pagesURLPattern: BASE_PATH,
      routerBase: BASE_PATH,
      publicPath: BASE_PATH
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
