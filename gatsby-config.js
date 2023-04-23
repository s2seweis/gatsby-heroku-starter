/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Portfolio build with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio `,
    url: `https://gatsby-strapi-portfolio-project.netlify.app`,
    githubUsername:"s2seweis",
    image: `/scrrenshot.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: `http://127.0.0.1:1337`,

        apiURL: `https://gatsby-portfolio-backend.herokuapp.com`,


        queryLimit: 1000, // Default to 100
        collectionTypes: [`jobs`, `projects`],
        singleTypes: [`about`, `development`, `adobe`]
      },
    },

  ],
}
