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

const Adobe = ({data}) => {
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

                <Card style={{marginBottom: '20px'}}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text style={{marginTop: '20px'}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>

                <Accordion style={{marginBottom: '20px'}}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
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
                   

                    {/* ### */}

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

export default Adobe;
