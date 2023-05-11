import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

import me from '../assets/images/me.jpg'

import CV from '../assets/images/CV-v1.pdf';

import {StaticImage} from 'gatsby-plugin-image';





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
          <img style={{marginTop:"30px", width:"230px"}} src={me} alt={title} className="about-img-svg" />

        

                <div style={{display:"flex"}}>
  
              {/* <StaticImage
                  style={{}}
                  src="../assets/images/me.jpg"
                  alt="portfolio"
                  className="hero-img8"
                  placeholder="blurred"
                  /> */}

                  </div>


         



          <article className="about-text">

                <div style={{display:"flex", justifyContent:"center"}}>

          {/* <StaticImage
                  style={{}}
                  src="../assets/images/me.jpg"
                  alt="portfolio"
                  className="hero-img8"
                  placeholder="blurred"
                  /> */}

                  </div>
            <Title title={title} />



            
            <p style={{marginLeft:"20px"}}>{info}</p>
            


              {/* <button style={{marginBottom:"20px", padding:"10px", background:"lightblue", border:"none"}}>

            <a 
              href="/files/CV.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
              >
              Download CV
            </a>

              </button> */}

              <button style={{marginBottom:"20px", padding:"10px", background:"lightblue", border:"none", marginLeft:"20px"}}>

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
