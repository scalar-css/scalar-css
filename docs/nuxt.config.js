export default {
  components: true,

  modules: ['@nuxt/content', 'nuxt-webfontloader'],

  css: ['~/styles/scalar.pcss'],

  head: {
    title: 'Scalar CSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'twitter_card', name: 'twitter:card', content: 'summary' },
      { property: 'og:site_name', content: 'Scalar CSS' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ]
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  webfontloader: {
    google: {
      families: ['Work+Sans:wght@700&display=swap']
    }
  },

  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-simple-vars': {},
        'postcss-preset-env': {},
        'postcss-nested': {},
        '@scalar-css/scalar-css': {}
      },
      preset: {
        stage: 0
      }
    },

    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader']
      })
    },

    transpile: ['@scalar-css/js-property-calculator']
  }
}
