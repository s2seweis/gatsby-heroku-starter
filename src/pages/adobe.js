// import React from 'react';
import {graphql} from 'gatsby';
import Title from '../components/Title';
import Seo from '../components/Seo';

import {FaReact, FaNodeJs} from 'react-icons/fa';
import {BsFiletypeHtml, BsFiletypeCss} from 'react-icons/bs';

import {logo} from '../assets/images/hero.svg';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGatsby,
  SiNodedotjs,
  SiAngular,
  SiJquery,
} from 'react-icons/si';

// ###

// import Seo from '../components/Seo';

import Game from '../components-game/Game';

import hero from '../assets/images/hero.svg';
import projects from '../assets/images/projects-1.jpg';

import logo5 from '../assets/images/logo5.svg';

import projects1 from '../assets/images/projects-4.jpg';
import projects2 from '../assets/images/projects-3.jpg';

// ###
import {Button} from 'react-bootstrap';
// import '../assets/css/main.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

import '../components/custom.css';

import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';

import flyer from '../assets/images/flyer.jpg';

import logo6 from '../assets/images/logo6.png';

import simple from '../assets/images/simple.gif';
import xd5 from '../assets/images/xd-draft.jpg';

import Carousel from 'react-bootstrap/Carousel';

import Preloader from '../components/loader';

import ScrollToTop from "react-scroll-to-top";


// ###

export const query = graphql`
  {
    strapiAdobe {
      title1
      text1
      image1 {
        localFile {
          publicURL
        }
      }
      image2 {
        localFile {
          publicURL
        }
      }
      image3 {
        localFile {
          publicURL
        }
      }
      image4 {
        localFile {
          publicURL
        }
      }
      image5 {
        localFile {
          publicURL
        }
      }
      image6 {
        localFile {
          publicURL
        }
      }
    }
  }
`;

const Adobe = ({data}) => {
  const [index, setIndex] = useState (0);

  const handleSelect = (selectedIndex, e) => {
    setIndex (selectedIndex);
  };

  console.log (data);
  const {
    strapiAdobe: {
      title1,
      text1,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
    },
  } = data;
  return (
    <div>

      <Seo title="About" />

      <div style={{background: 'var(--clr-grey-10)'}} className="head-top">

      <ScrollToTop smooth color="#6f00ff" />


        <Seo title="Adobe" />

        <div className="top-head" style={{marginTop: '100px'}} />

        <div style={{margin: 'auto', marginBottom: '50px'}} className="top-web">

          <div className="Test2">

            {/* ### - Header*/}

            <div style={{height: '70px'}} class="header1">

              <h2 className="title-web" style={{marginBottom: '0px'}}>
                Adobe
              </h2>

            </div>

            {/* ### */}

            <div class="row" style={{background: 'var(--clr-grey-10)'}}>
              {/* ### */}

              <div class="col-3 menu">

                <div className="color" style={{textAlign: 'center'}}>

                  <p
                    style={{
                      background: 'white',
                      padding: '15px',
                    }}
                  >

                    <div class="container1">
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <h4
                            style={{textAlign: 'center'}}
                            class="animate-charcter"
                          >
                            {' '}Adobe - My Tools:
                          </h4>
                        </div>
                      </div>
                    </div>

                    <ListGroup style={{marginBottom: '20px'}} variant="flush">
                      <ListGroup.Item>Adobe PH</ListGroup.Item>
                      <ListGroup.Item>Adobe AI</ListGroup.Item>
                      <ListGroup.Item>
                        Adobe IN
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Adobe XD
                      </ListGroup.Item>
                      {/* <ListGroup.Item>CSS/SCSS</ListGroup.Item>
                      <ListGroup.Item>Grid/Bootstrap</ListGroup.Item>
                      <ListGroup.Item>Media Queries</ListGroup.Item> */}
                    </ListGroup>

                  </p>

                </div>

                <div
                  className="color"
                  style={{textAlign: 'center', marginTop: '15px'}}
                >

                  <p
                    style={{
                      background: 'white',
                      padding: '15px',
                    }}
                  >

                    <h3> Some of my projects </h3>

                    <ListGroup style={{marginBottom: '20px'}} variant="flush">
                      <ListGroup.Item>Editing Images</ListGroup.Item>
                      <ListGroup.Item>Building Effects</ListGroup.Item>
                      <ListGroup.Item>
                        Design Themes
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Design Flyers{' '}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Design Spinners
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Design Gifs
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Design/Rebuild Logos
                      </ListGroup.Item>

                    </ListGroup>

                  </p>

                </div>

              </div>

              {/* ### */}

              <div
                style={{
                  padding: '15px',
                  background: 'white',
                  marginTop: '15px',
                }}
                class="col-6"
              >

                <div className="background">

                <div
                style={{display: 'flex', justifyContent: 'center'}}
                className="semantic-ui-1"
              >

                <div class="ui breadcrumb">
                  <a class="section" href="/web-development">Stack</a>
                  {/* <div class="active section " href="/adobe">Stack</div> */}

                  <div class="divider">/</div>
                  <a class="section" href="/web-design">Webdesign</a>
                  {/* <div class="active section " href="/adobe">Webdesign</div> */}

                  <div class="divider">/</div>
                  {/* <a class="section" href="/adobe">Adobe</a> */}
                  <div class="active section " href="/adobe" >Adobe</div>

                </div>
              </div>

                  {/* ### New Content */}

                  <section
                    style={{
                      marginTop: '0px',
                      padding: '0px',
                      background: 'white',
                    }}
                    className="about-page"
                  >
                    {/* ### */}

                    <h4> Editing </h4>

                    {/* ###1 */}
                    <div style={{}} className="adobe5">
                      {/* <h4 style={{marginTop: '20px'}}>Before</h4> */}

                      <img
                        src={image1.localFile.publicURL}
                        alt={title1}
                        className="img-adobe"
                      />

                      {/* <h4>After</h4> */}

                      <img
                        src={image2.localFile.publicURL}
                        alt={title1}
                        className="img-adobe"
                      />

                    </div>
                    {/* ### */}

                    <h4> Effects </h4>
                    {/* ###2 */}
                    <div style={{}} className="adobe5">
                      {/* <h4 style={{marginTop: '20px'}}>Before</h4> */}

                      <img
                        src={image3.localFile.publicURL}
                        alt={title1}
                        className="img-adobe"
                      />

                      {/* <h4>After</h4> */}

                      <img
                        src={image4.localFile.publicURL}
                        alt={title1}
                        className="img-adobe"
                      />

                    </div>
                    {/* ### */}

                    <h4 style={{marginTop: '20px'}}>Flyer</h4>

                    <img
                      style={{width: '-webkit-fill-available'}}
                      src={flyer}
                      alt={title1}
                      className="image1"
                    />

                    <h4 style={{marginTop: '20px'}}>Logo Before and After</h4>

                    <img
                      style={{width: '-webkit-fill-available'}}
                      src={logo6}
                      alt={title1}
                      className="image1"
                    />

                    <h4>Simple Gif</h4>

                    <div style={{display: 'flex', justifyContent: 'center'}}>

                      <img
                        style={{width: '50%'}}
                        src={simple}
                        alt={title1}
                        className="image1"
                      />

                    </div>
                    {/* ### */}

                    <h4 style={{marginTop: '20px'}}>Adobe XD</h4>

                    <img
                      style={{width: '-webkit-fill-available'}}
                      src={xd5}
                      alt={title1}
                      className="image1"
                    />

                    {/* ### */}

                    {/* ### */}

                  </section>

                  {/* ### New Content End */}

                  <h4> Loader </h4>

                  <div style={{display: 'flex', justifyContent: 'center'}}>

                    <Preloader />
                  </div>

                </div>

              </div>

              {/* ### */}

              {/* ### */}

            </div>

            {/* ### */}

            <div style={{marginTop: '20px', height: '50px'}} class="footer">

              <div>

                Resize the browser window to see how the content respond to the resizing.

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ### */}

      {/* ### */}

    </div>
  );
};

export default Adobe;

// ###

// import React from "react"
// import { graphql } from "gatsby"
// import Title from "../components/Title"
// import Seo from "../components/Seo"

// const About = ({ data }) => {
//   console.log(data);
//   const {
//     strapiAbout: { title, image, info, stack },
//   } = data
//   return (
//     <>
//       <Seo title="About" />
//       <section className="about-page">

//         <div

//         // style={{display:"flex"}}

//         className="section-center1 about-center">
//           <img src={image.localFile.publicURL} alt={title} className="about-img-svg" />

//           <article className="about-text">
//             <Title title={title} />
//             <p>{info}</p>

//             <div className="about-stack">

//             <div className="abou-stack-center"

//             style={{display:"table", margin:"auto"}}

//             >

//               {stack.map(item => {
//                 return <span key={item.id}>{item.title}</span>
//               })}
//             </div>

//               </div>

//           </article>
//         </div>
//       </section>
//     </>
//   )
// }

// export const query = graphql`
//   {
//     strapiAbout {
//       title
//       info
//       stack {
//         id
//         title
//       }
//       image {
//         localFile {
//           publicURL
//         }
//       }
//     }
//   }
// `

// export default About
