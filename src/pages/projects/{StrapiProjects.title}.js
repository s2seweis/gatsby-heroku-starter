import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
    <Seo
      title={data.strapiProjects.title.toUpperCase()}
      description={data.strapiProjects.description}
      image={data.strapiProjects.image.publicURL}
    />
    <main className="project-template-page">
      <h2>{title}</h2>
      <p>{data.strapiProjects.description}</p>
    </main>
  </>
  )
}



export const query = graphql`
  query getSingleProjects($title: String) {
    strapiProjects(title: { eq: $title }) {
      description
      title
      image {
        localFile{
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
