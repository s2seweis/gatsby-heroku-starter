import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

import me from '../assets/images/me.jpg'



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
        
        
        // style={{display:"flex"}}
        
        className="section-center1 about-center">
          {/* <img src={image.localFile.publicURL} alt={title} className="about-img-svg" /> */}
          <img style={{marginTop:"30px", marginRight:"20px"}} src={me} alt={title} className="about-img-svg" />



         



          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            


              <button style={{marginBottom:"20px", padding:"10px", background:"lightblue", border:"none"}}>

            <a 
              href="/files/CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              >
              Download CV
            </a>

              </button>


            <div className="about-stack">

            <div className="abou-stack-center"

            style={{display:"table", margin:"auto"}}

            
            
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
