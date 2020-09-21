const path = require('path')
// https://github.com/staticfuse/staticfuse/blob/master/packages/gatsby-theme-publisher/gatsby-config.js

module.exports = options => {
  const { navButtonTheme, colorModes } = options
  const config = {
    siteMetadata: {
      title: '',
      description: '',
      keywords: '',
      siteURL: '',
      siteImage: '',
      twitterUsername: '',
      github: '',
      author: {
        name: ''
      },
      config: {
        headerHeight: options.headerHeight || 64,
        sideBarWidth: options.sideBarWidth || 240,
        logo: options.logo || '',
        navButtonTheme: {
          showButtonTheme: !!navButtonTheme && !!navButtonTheme.showButtonTheme,
          text:
            navButtonTheme && navButtonTheme.text ? navButtonTheme.text : '',
          colorsModes:
            navButtonTheme && navButtonTheme.colorsModes
              ? navButtonTheme.colorsModes
              : ''
        },
        colorModes: {
          default: colorModes && colorModes.default ? colorModes.default : ''
        }
      }
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-mdx',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-plugin-layout',
        options: {
          component: require.resolve('./src/layouts/layout.js')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('src/page')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'index',
          path: path.resolve('src/index.mdx')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'sections',
          path: path.resolve('src/sections')
        }
      }
    ]
  }
  const {
    sourceWordpress: { sourcePost = false, sourcePage = false },
    sourceMdxPosts = false,
    logo
  } = options
  // Push another plugins dynamicly here
  if (sourcePost || sourcePage) {
    console.log('Get data from Wordpress ...')
    // config.plugins.push()
  }
  if (sourceMdxPosts) {
    config.plugins.push({
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve('src/posts')
      }
    })
  }
  if (logo) {
    config.plugins.push({
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logo',
        path: path.resolve(logo)
      }
    })
  }
  return config
}
