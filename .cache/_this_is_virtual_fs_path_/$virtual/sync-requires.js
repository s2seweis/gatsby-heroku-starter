
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/SWT/Desktop/testbackend/gatsby-heroku-starter/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/SWT/Desktop/testbackend/gatsby-heroku-starter/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/SWT/Desktop/testbackend/gatsby-heroku-starter/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/SWT/Desktop/testbackend/gatsby-heroku-starter/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/SWT/Desktop/testbackend/gatsby-heroku-starter/src/pages/projects.js"))
}

