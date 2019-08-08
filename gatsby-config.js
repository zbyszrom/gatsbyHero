/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
      title: "Moje prace",
      author: 'zbyszrom'
     
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/pictures/`
        }
    },
    
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet'
    
    
]
}

