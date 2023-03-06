# Gatsby-Strapi Portfolio Starter

## Setup Notes

1. Used Hello World Starter (all packages included)
2. All components ready to go (including imports)
3. main.css - all styles ready to go
4. No font plugin
5. React-icons
6. Limit amount of components - better overview
7. Use constants to avoid repetition
8. Favicon in Static
9. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: `http://localhost:1337`,
        apiURL: `https://gatsby-portfolio-backend.herokuapp.com/`,
        queryLimit: 1000, // Default to 100
        
        // Older Plugin Version 0.0.12 (used in the starter)
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        // New Plugin Version 1+ (npm install gatsby-source-strapi@latest)
        // collectionTypes: [`jobs`, `projects`, `blogs`, ],

        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

Building the Project:
npm run build

Run the Project:
npm start

127.0.0.1:1337

!!!working repo on github!!!