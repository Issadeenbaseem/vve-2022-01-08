// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/gatsby-config/
//  */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "virtue-demo",
      },
    },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: 'js/jquery.min.js',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     // src: 'js/jquery.min.js',
    //     src: 'js/bootstrap.min.js',
    //   },
    // },
    //   {
    //     resolve: 'gatsby-plugin-load-script',
    //     options: {
    //       src: 'js/swiper.min.js',
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-load-script',
    //     options: {
    //       src: 'js/fancybox.min.js',
    //     },
    //   },
    //   {
    //     resolve: 'gatsby-plugin-load-script',
    //     options: {
    //       src: 'js/odometer.min.js',
    //     },
    //   },
  ],
}
