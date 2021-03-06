module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Itunes Search',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: '/material-design-icons/iconfont/material-icons.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/vuetify.js'],
  css: [
    '~assets/app.styl',
    'material-design-icons/iconfont/material-icons.css'
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
    }
  }
}
