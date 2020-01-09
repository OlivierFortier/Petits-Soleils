export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: "Petits Soleils de la Pointe-de-l'île",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "Petits Soleils de la Pointe-de-l'île",
        name: "Petits Soleils de la Pointe-de-l'île",
        content: "Petits Soleils de la Pointe-de-l'île"
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    manifest: {
      name: "Petits Soleils de la Pointe-de-l'île",
      short_name: 'Petits Soleils',
      lang: 'french',
      scope: '/',
      start_url: 'https://petits-soleils.netlify.com/',
      display: 'fullscreen',
      theme_color: '#D47C80',
      description: "L'application web des Petits Soleils de la Pointe-de-l'île",
      orientation: 'any',
      background_color: '#D47C80',
      related_applications: '',
      prefer_related_applications: 'false'
    },
    meta: {
      theme_color: '#D47C80',
      mobileAppIOS: 'true'
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
