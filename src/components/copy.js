import React from 'react';
import {graphql} from 'gatsby';
import Title from '../components/Title';
import Seo from '../components/Seo';

import {FaReact, FaNodeJs} from 'react-icons/fa';
import {BsFiletypeHtml, BsFiletypeCss} from 'react-icons/bs';

import {logo} from "../assets/images/hero.svg"


import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGatsby,
  SiNodedotjs,
  SiAngular,
  SiJquery,
} from 'react-icons/si';

const webdevelopment = ({data}) => {
  console.log (data);
  const {
    strapiDevelopment: {
      title,
      title1,
      title2,
      title3,
      title4,
      info,
      stack,
      stack1,
      stack2,
      stack3,
      image,
    },
  } = data;
  return (
    <div>

      <Seo title="About" />
      <section className="about-page">

        <div className="section-center2 about-center2">

          {/* <img src={image.localFile.publicURL} alt={title} className="image-back" 
        
        style={{width:"50%"}}

        
        /> */}

          {/* <img src={image.localFile.publicURL} alt={title} className="about-img-svg" /> */}

          {/* <BsFiletypeCss className="social-link"></BsFiletypeCss>
        <div className="about-stack">Test</div> */}

          {/* <BsFiletypeHtml className="social-link"></BsFiletypeHtml>
        <SiJavascript className="social-link"></SiJavascript>
        <SiCss3 className="social-link"></SiCss3>
        <SiHtml5 className="social-link"></SiHtml5>
        <SiCsswizardry className="social-link"></SiCsswizardry> */}

          <article className="about-text">
            {/* <Title title={title} /> */}

            <h3 style={{textAlign: 'center'}}>{title}</h3>

            <p style={{textAlign: 'center', marginBottom:"40px"}}>{info}</p>

            {/* ### */}

            <h4 style={{textAlign: 'center'}}>{title1}</h4>

            <div
              className="about-stack"
              style={{display: 'table', margin: 'auto', marginBottom:"40px", textAlign:"center"}}
            >
              {stack.map (item => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>




            {/* <div className='stack-row'
              style={{
                display: 'grid',
                // justifyContent: 'center',
                gridTemplateColumns:" 80px 80px 80px 80px",
                justifyContent:"center",
                marginTop: '20px',
                // marginBottom:"20px"
              }}
            >

              <BsFiletypeHtml className="social-link-web" />
              <BsFiletypeCss className="social-link-web" />
              <SiJavascript className="social-link-web" />
              <SiTypescript className="social-link-web" />

            </div> */}


            

            {/* ### */}

            <h4 style={{textAlign: 'center'}}>{title2}</h4>

            <div
              className="about-stack"
              style={{display: 'table', margin: 'auto', marginBottom:"40px", textAlign:"center"}}
            >
              {stack1.map (item => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>

            {/* <div className='stack-row'
              style={{
                display: 'grid',
                // justifyContent: 'center',
                gridTemplateColumns:" 80px 80px 80px 80px 80px",
                justifyContent:"center",
                marginTop: '20px',
                // marginBottom:"20px"
              }}
            >

              <FaReact className="social-link-web" />
              <SiGatsby className="social-link-web" />
              <SiAngular className="social-link-web" />
              <FaNodeJs className="social-link-web" />
              <SiJquery className="social-link-web" />

            </div> */}

            {/* ### */}

            <h4 style={{textAlign: 'center'}}>{title3}</h4>

            <div
              className="about-stack"
              style={{display: 'table', margin: 'auto', marginBottom:"40px", textAlign:"center"}}
            >
              {stack2.map (item => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>

            <h4 style={{textAlign: 'center'}}>{title4}</h4>

            <div
              className="about-stack"
              style={{display: 'table', margin: 'auto', textAlign:"center"}}
            >
              {stack3.map (item => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>

            {/* ### */}

            {/* <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
              }}
            >

              <SiReact className="social-link-web" />
              <SiGatsby className="social-link-web" />
              <SiNodedotjs className="social-link-web" />
              <SiAngular className="social-link-web" />
              <SiJquery className="social-link-web" />

            </div> */}

          </article>

        </div>

      </section>

    </div>
  );
};

export const query = graphql`
  {
    strapiDevelopment {
      info
      title
      title1
      stack {
        id
        title
      }
      title2
      stack1 {
        id
        title
      }
      title3
      stack2 {
        id
        title
      }
      title4
      stack3 {
        id
        title
      }
    }
  }
`

export default webdevelopment;



{/* ### New Content */}

<section 
style={{marginTop:"0px", padding:"0px"}}
className="about-page">

  <div className="section-center2 about-center2">

    <article className="about-text"
    style={{padding:"0px", background:"white", padding:"10px"}}
    >

      <h3 style={{textAlign: 'center'}}>{title}</h3>

      <p style={{textAlign: 'center', marginBottom: '40px'}}>
        {info}
      </p>

      <h4 style={{textAlign: 'center'}}>{title1}</h4>

      <div
        className="about-stack"
        style={{
          display: 'table',
          margin: 'auto',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        {stack.map (item => {
          return <span key={item.id}>{item.title}</span>;
        })}
      </div>

      <h4 style={{textAlign: 'center'}}>{title2}</h4>

      <div
        className="about-stack"
        style={{
          display: 'table',
          margin: 'auto',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        {stack1.map (item => {
          return <span key={item.id}>{item.title}</span>;
        })}
      </div>

      <h4 style={{textAlign: 'center'}}>{title3}</h4>

      <div
        className="about-stack"
        style={{
          display: 'table',
          margin: 'auto',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        {stack2.map (item => {
          return <span key={item.id}>{item.title}</span>;
        })}
      </div>

      <h4 style={{textAlign: 'center'}}>{title4}</h4>

      <div
        className="about-stack"
        style={{
          display: 'table',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        {stack3.map (item => {
          return <span key={item.id}>{item.title}</span>;
        })}
      </div>

    </article>

  </div>

</section>

{/* ### New Content End */}
