const React = require("react")
const Layout = require("./src/components/Layout").default

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}


// export const onInitialClientRender = () => {
//   setTimeout(function() {
//       document.getElementById("___loader").style.display = "none"
//   }, 1000)
// }