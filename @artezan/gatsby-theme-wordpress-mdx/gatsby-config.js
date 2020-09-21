const path = require('path')
// https://github.com/staticfuse/staticfuse/blob/master/packages/gatsby-theme-publisher/gatsby-config.js

module.exports = options => {
  const config = {
    siteMetadata: {
      title: '',
      description: '',
      keywords: [],
      siteURL: '',
      siteImage: '',
      config: {
        headerHeight: 64,
        sideBarWidth: 240,
        showToggle: true,
        multipleBackground: true,
        twitter: '',
        github: ''
      }
    },
    plugins: [
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
  const { sourceWordpress = false, sourceMdxPosts = false } = options
  // Push another plugins dynamicly here
  if (sourceWordpress) {
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
  return config
}
