module.exports = {
  siteMetadata: {
    
    title: "Kampus IT dan Bisnis Full Praktek Pengajar Praktisi di Tangerang",
    description:
      "Kampus IT dan Bisnis Digital Tangerang | Kuliah IT dan Bisnis Digital terbaik Tangerang | Training Mikrotik tangerang | Training MTCNA | Training Sertifikasi MTCNA | Training Sertifikasi Mikrotik | Official website Areta Informatics College dikembakangkan dengan framework GatsbyJS dan CMS Netlify.",
    author : "eka",
    keywords: [
      "Kampus IT Tangerang", 
      "Kampus IT Tangerang Selatan",
      "Kampus IT Tangerang Kabupaten",
      "Kampus IT Terdekat",
      "Kampus IT Terdekat dari lokasi saya", 
      "kampus full praktek", 
      "kampus bisnis digital", 
      "Kampus digital marketing", 
      "Kuliah IT Tangerang",
      "Kuliah Jurusan Teknik Informatika",
      "Training MTCNA", 
      "training mtcna associate",
      "training mtcna bandung", 
      "training mtcna exam",
      "training mtcna jakarta", 
      "training mtcna tangerang",
      "training mtcna depok",
      "training mtcna bekasi",
      "training mtcna indonesia", 
      "training mtcna tangerang selatan",
      "Training Sertifikasi MTCNA",
      "training sertifikasi mtcna mikrotik", 
      "training sertifikasi mtcna associate", 
      "training sertifikasi mtcna bandung", 
      "training sertifikasi mtcna bekasi", 
      "training sertifikasi MTCNA 2024", 
      "training sertifikasi MTCNA di indonesia",
      "training sertifikasi MTCNA sertifikat",
      "training sertifikasi MTCNA certificate",
      "training sertifikasi MTCNA surabaya",
      "training sertifikasi MTCNA mtcre",
      "training sertifikasi mikrotik mtcna",
      "training sertifikasi mikrotik 2024", 
      "training sertifikasi mikrotik associate", 
      "training sertifikasi mikrotik",
      "training sertifikasi mikrotik di makasar", 
      "training sertifikasi mikrotik di tangerang",
      "training sertifikasi mikrotik di indonesia", 
      "training sertifikasi mikrotik di bekasi", 
      "training sertifikasi mikrotik exam",
      "training sertifikasi mikrotik + exam", 
      "training sertifikasi mikrotik di jakarta", 
      "training sertifikasi mikrotik di bandung", 
      "training sertifikasi mikrotik bootcamp",
      "training sertifikasi mikrotik bandung",
      "training sertifikasi mikrotik tangerang", 
      "training sertifikasi mikrotik surabaya",
      "training mikrotik",
      "training mikrotik jakarta",
      "Jurusan Teknik Informatika", 
      "Areta Informatics College", 
      "full praktek", 
      "Jurusan Teknik Informatika", 
      "Pelatihan Jaringan Tangerang", 
      "Pelatihan IT 2024",
      "Sertifikasi MikroTik", 
      "sertifikasi mikrotik mtcna", 
      "sertifikasi mikrotik indonesia", 
      "sertifikasi mikrotik certificate", 
      "sertifikasi mikrotik certified", 
      "sertifikasi mikrotik certification", 
      "Sertifikasi IT", 
      "sertifikasi MTCNA", 
      "sertifikasi jaringan", 
      "Sertifikasi Mikrotik 2024", 
      "Basic Mikrotik Training", 
      "Ahli Jaringan", 
      "Pelatihan IT", 
      "Pelatihan Jaringan Komputer", 
      "Mikrotik Training Seminar", 
      "MikroTik Certified Network Associate", 
      "Mikrotik Full Praktek", 
      "MikroTik Tangerang", 
      "MTCNA", 
      "MTCRE MTCWE MTCTE"
    ],  
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Areta Informatics College`,
        short_name: `AretaCollege`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0a0a0a`,
        display: `standalone`,
        icon: `src/img/favicon.png`, // <- pastikan ini benar!
      },
    },
    
    {
      
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: 'gatsby-plugin-next-seo',
            options: {
              openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://aretacollege.netlify.app/',
                site_name: 'AretaCollege',
              },
              twitter: {
                handle: '@aretacollege',
                site: '@aretacollege',
                cardType: 'summary_large_image',
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    'gatsby-plugin-postcss',
  ],
};
