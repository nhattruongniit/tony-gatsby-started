/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Tony Gatsby",
    description: "This i gatsby tutorial",
    author: "tony.nguyen",
    data: ["item1", "item2"],
    person: {
      name: "tony",
      age: 32,
    },
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
