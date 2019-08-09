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
   
    
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'pictures',
            path: `${__dirname}/src/pictures/`
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/data/`
        }
    },
    
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet'
    
    
]
}

