import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import ScrollToTop from "react-scroll-to-top";
import '../assets/css/projects.css';

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
      <ScrollToTop smooth color="#6f00ff" />
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage