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

import Carousel from 'react-bootstrap/Carousel';

import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';

// ###

import {Link} from 'gatsby';

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
`;

const Webdevelopment = ({data}) => {
  const [index, setIndex] = useState (0);

  const handleSelect = (selectedIndex, e) => {
    setIndex (selectedIndex);
  };

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

      <div style={{background: 'var(--clr-grey-10)'}} className="head-top">

        <Seo title="Contact" />

        <div className="top-head" />

        <div style={{margin: 'auto', marginBottom: '15px'}} className="top-web">

          <div className="Test2">

            {/* ### - Header*/}

            <div style={{height: '70px'}} class="header1">

              <h2 className="title-web" style={{marginBottom: '0px'}}>
                Webdevelopment
              </h2>

            </div>

            {/* ### */}

            <div class="row" style={{background: 'var(--clr-grey-10)'}}>
              <div style={{padding: '15px 15px 0px 15px'}} class="col-3 menu">

                <div
                  className="menu-sub"
                  // ### making bootstrap breadcrumb out of it

                  style={{
                    marginBottom: '15px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px',
                  }}
                >

                  <div>

                    <Link to="/web-design" className="btn1">
                      Webdesign
                    </Link>
                  </div>

                  <div>

                    <Link to="/adobe" className="btn1">
                      Adobe
                    </Link>
                  </div>

                </div>

                <Accordion style={{}}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header style={{marginTop: '0px'}}>
                      What is web design everything about?
                    </Accordion.Header>
                    <Accordion.Body>
                      Web design is the field that involves digital interfaces such as websites,

                      apps, and services.
                      By using HTML code to program websites and CSS to standardize its visual language,

                      web design professionals are responsible for building digital experiences to be used by the public.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How to be a good web designer?
                    </Accordion.Header>
                    <Accordion.Body>
                      1. Avoid hectic color schemes.
                      2. Put some thought into the images you include.
                      3. Learn about SEO.
                      4. Use responsive design.
                      5. Keep typography consistent.
                      6. Keep diversity and inclusion in mind.
                      7. Define who you are as a designer
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What is effective web design?
                    </Accordion.Header>
                    <Accordion.Body>
                      Rather than trying to force the viewer's visual flow,
                      effectively designed websites will work with a reader's natural behaviour

                      and display information in order of importance (left to right, and top to bottom).
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </div>

              <div
                style={{
                  padding: '15px',
                  // background: 'white',
                  marginTop: '15px',
                }}
                class="col-6"
              >

                <div className="background">

                  {/* ### New Content */}

                  <section
                    style={{
                      marginTop: '0px',
                      padding: '0px',
                      // background: 'white',
                    }}
                    className="about-page"
                  >

                    <div className="section-center2 about-center2">

                      <article
                        className="about-text"
                        style={{
                          padding: '0px',
                          // background: 'white',
                          padding: '10px',
                        }}
                      >

                        <div
                          className="pl"
                          style={{
                            background: 'var(--clr-grey-10)',
                            borderRadius: '15px',
                            paddingTop: '10px',
                          }}
                        >

                          <h3 style={{textAlign: 'center'}}>{title}</h3>

                          <p
                            style={{textAlign: 'center', marginBottom: '40px'}}
                          >
                            {info}
                          </p>

                        </div>

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

export default Webdevelopment;
