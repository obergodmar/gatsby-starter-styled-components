module.exports = {
  siteMetadata: {
    title: `Emergency Analyzer`,
    siteUrl: `http://localhosts/`,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["REACT_APP_VERSION", "API_TOKEN"],
      },
    },
  ],
}
