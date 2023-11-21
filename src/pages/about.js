import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import me from '../assets/images/me.jpg'
import CV from '../assets/images/CV-v6.pdf';
import '../assets/css/about.css';

const About = ({ data }) => {
  console.log(data);
  const {
    strapiAbout: { title, image, info, stack },
  } = data
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div
          className="section-center1 about-center">
          <img style={{ marginTop: "30px", width: "230px" }} src={me} alt={title} className="about-img-svg" />
          <div style={{ display: "flex" }}>
          </div>
          <article className="about-text">
            <div style={{ display: "flex", justifyContent: "center" }}>
            </div>
            <Title title={title} />
            <p style={{ marginLeft: "20px" }}>{info}</p>
            <button style={{ marginBottom: "20px", padding: "10px", background: "lightblue", border: "none", marginLeft: "20px" }}>
              <a
                href={CV}
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
            <div className="about-stack">
              <div className="abou-stack-center"
                style={{ display: "table", margin: "auto" }}
              >
                {stack.map(item => {
                  return <span key={item.id}>{item.title}</span>
                })}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`
export default About
