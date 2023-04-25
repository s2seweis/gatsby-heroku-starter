// // import React from 'react';
// import {graphql} from 'gatsby';
// import Title from '../components/Title';
// import Seo from '../components/Seo';

// import {FaReact, FaNodeJs} from 'react-icons/fa';
// import {BsFiletypeHtml, BsFiletypeCss} from 'react-icons/bs';

// import {logo} from '../assets/images/hero.svg';

// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiGatsby,
//   SiNodedotjs,
//   SiAngular,
//   SiJquery,
// } from 'react-icons/si';

// // ###

// // import Seo from '../components/Seo';

// import Game from '../components-game/Game';

// import hero from '../assets/images/hero.svg';
// import projects from '../assets/images/projects-1.jpg';

// import logo5 from '../assets/images/logo5.svg';

// import projects1 from '../assets/images/projects-4.jpg';
// import projects2 from '../assets/images/projects-3.jpg';

// // ###
// import {Button} from 'react-bootstrap';
// // import '../assets/css/main.css';

// // import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
// import ListGroup from 'react-bootstrap/ListGroup';

// import '../components/custom.css';

// import Carousel from 'react-bootstrap/Carousel';

// import React, {useState} from 'react';

// import Card from 'react-bootstrap/Card';

// // ###

// // export const query = graphql`
// //   {
// //     strapiAdobe {
// //       title1
// //       text1
// //       image1 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //       image2 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //       image3 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //       image4 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //       image5 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //       image6 {
// //         localFile {
// //           publicURL
// //         }
// //       }
// //     }
// //   }
// // `;

// const Adobe = ({data}) => {
//   const [index, setIndex] = useState (0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex (selectedIndex);
//   };

//   console.log (data);
//   const {
//     strapiAdobe: {
//       title1,
//       text1,
//       image1,
//       image2,
//       image3,
//       image4,
//       image5,
//       image6,
//     },
//   } = data;
//   return (
//     <div>

//       <Seo title="About" />

//       <div style={{background: 'var(--clr-grey-10)'}} className="head-top">

//         <Seo title="Contact" />

//         <div className="top-head" style={{marginTop: '100px'}} />

//         <div style={{margin: 'auto', marginBottom: '50px'}} className="top-web">

//           <div className="Test2">

//             {/* ### - Header*/}

//             <div style={{height: '70px'}} class="header1">

//               <h2 className="title-web" style={{marginBottom: '0px'}}>
//                 Adobe
//               </h2>

//             </div>

//             {/* ### */}

//             <div class="row" style={{background: 'var(--clr-grey-10)'}}>
//               {/* ### */}

//               <div class="col-3 menu">

//                 <Accordion style={{marginBottom: '20px'}}>
//                   <Accordion.Item eventKey="0">
//                     <Accordion.Header>
//                       Is this part of my portfolio ready ?
//                     </Accordion.Header>
//                     <Accordion.Body>
//                       No, I regret that this part and other stuff of my portfolio is not complete, it just give you an first impression of my skills.
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="1">
//                     <Accordion.Header>
//                       Why Adobe?
//                     </Accordion.Header>
//                     <Accordion.Body>
//                       Adobe Creative Cloud gives graphic artists and photographers the creation and editing tools they need to realize their visions. 
//                       This includes both the graphic design software to make new work and the editing tools to make content like photos and video footage look their best.
//                     </Accordion.Body>
//                   </Accordion.Item>
//                   <Accordion.Item eventKey="2">
//                     <Accordion.Header>
//                       What I do at the moment with adobe?
//                     </Accordion.Header>
//                     <Accordion.Body>
//                      Currently I work with adobe for improving the webdesign of my landing pages. 
//                      The goal of a landing page is to convert and build a repository of leads that can be nurtured with more personalized marketing campaigns using email, 
//                      direct mail, paid ads, or other types of targeted marketing before those leads reach your sales team to make a purchase.
//                     </Accordion.Body>
//                   </Accordion.Item>
//                 </Accordion>

//               </div>

//               {/* ### */}

//               <div
//                 style={{
//                   padding: '15px',
//                   background: 'white',
//                   marginTop: '15px',
//                 }}
//                 class="col-6"
//               >

//                 <div className="background">

//                   {/* ### New Content */}

//                   <section
//                     style={{
//                       marginTop: '0px',
//                       padding: '0px',
//                       background: 'white',
//                     }}
//                     className="about-page"
//                   >
//                     {/* ### */}

//                     <h3> {title1} </h3>
//                     <h4> {text1} </h4>

//                     <h4 style={{marginTop: '20px'}}>Before</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image1.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     <h4>After</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image2.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     {/* ### */}

//                     <h4 style={{marginTop: '20px'}}>Before</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image3.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     <h4>After</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image4.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     {/* ### */}

//                     <h4 style={{marginTop: '20px'}}>Before</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image5.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     <h4>After</h4>

//                     <img
//                       style={{width: '-webkit-fill-available'}}
//                       src={image6.localFile.publicURL}
//                       alt={title1}
//                       className="image1"
//                     />

//                     {/* ### */}

//                   </section>

//                   {/* ### New Content End */}

//                 </div>

//               </div>

//               {/* ### */}

//               {/* ### */}

//             </div>

//             {/* ### */}

//             <div style={{marginTop: '20px', height: '50px'}} class="footer">

//               <div>

//                 Resize the browser window to see how the content respond to the resizing.

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ### */}

//       {/* ### */}

//     </div>
//   );
// };

// export default Adobe;



// ###

import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"



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
          <img src={image.localFile.publicURL} alt={title} className="about-img-svg" />



         



          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>




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
