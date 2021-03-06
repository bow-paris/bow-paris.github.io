module.exports = {
  siteMetadata: {
    title: 'Best of Web - Le meilleur des meetups du Web',
    author: 'Thomas Brisbout',
    description:
      'Une conference sur le web front-end et back-end, ainsi que le craftmanship',
  },
  plugins: [
    // Simple config, passing URL
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'BowQuery',
        // This is field under which it's accessible
        fieldName: 'bow',
        // Url to query from
        url: 'https://api.eventlama.com/gql',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'best-of-web-2020',
        short_name: 'best-of-web',
        start_url: '/',
        background_color: '#085078',
        theme_color: '#085078',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo_bow_40.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
