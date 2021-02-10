
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/fontawesome/css/all.min.css"
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */

  plugins: [
    "@/plugins/animate",
    "@/plugins/toast",
    "@/plugins/vue-moment",
  ],

  loading: "@/components/common/loaderComp.vue",

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    'nuxt-vuex-localstorage',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@tui-nuxt/editor',
  ],
  tui: {
    editor: {
      stylesheet: {
        editor: 'tui-editor/dist/tui-editor.css',
        contents: 'tui-editor/dist/tui-editor-contents.css',
        codemirror: 'codemirror/lib/codemirror.css',
        codeHighlight: 'highlight.js/styles/github.css',
        colorPicker: 'tui-color-picker/dist/tui-color-picker.min.css'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {

    baseURL:"http://localhost:5000/api/v1/"

    //https://gelistirici-toplulugu-api.herokuapp.com/api/v1
    //http://localhost:5000/api/v1/
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
