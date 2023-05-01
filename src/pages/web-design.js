// import React from 'react';
import Seo from '../components/Seo';

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

// import 'bootstrap/dist/css/bootstrap.min.css';

// ###

export const Webdesign = () => {
  const [index, setIndex] = useState (0);

  const handleSelect = (selectedIndex, e) => {
    setIndex (selectedIndex);
  };

  return (
    <div style={{background: 'var(--clr-grey-10)'}} className="head-top">

      <Seo title="Contact" />

      <div className="top-head" />

      <div style={{margin: 'auto', marginBottom: '15px'}} className="top-web">

        <div className="Test2">

          <div class="header1">

            <h2 className="title-web">
              Webdesign{' '}
            </h2>

          </div>

          {/* ### */}

          <div class="row" style={{background: 'var(--clr-grey-10)'}}>
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

              {/* ### */}

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
                          {' '}5 Desin Rules:
                        </h4>
                      </div>
                    </div>
                  </div>

                  <ListGroup style={{marginBottom: '20px'}} variant="flush">
                    <ListGroup.Item>1.Focus on the message.</ListGroup.Item>
                    <ListGroup.Item>2.Keep your layout neat.</ListGroup.Item>
                    <ListGroup.Item>
                      3.Choose user-friendly fonts.
                    </ListGroup.Item>
                    <ListGroup.Item>4.Avoid animation hell.</ListGroup.Item>
                    <ListGroup.Item>5.Make it easy to navigate.</ListGroup.Item>
                  </ListGroup>

                </p>

              </div>

              {/* ### */}

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


              <div
              className='colors'
              style={{height:"150px", width:"150px", backgroundColor:"lightblue"}}
              >

                Colors


              </div>

            </div>

            <div
              style={{
                padding: '50px',
                background: 'white',
                marginTop: '15px',
              }}
              class="col-6"
            >

              <div className="background">

                <div class="container">
                  <h2
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      marginTop: '10px',
                    }}
                    class="title"
                  >
                    <span class="title-word title-word-1">Web</span>
                    <span class="title-word title-word-2">de</span>
                    <span class="title-word title-word-3">sign</span>
                    <span class="title-word title-word-4">???</span>
                  </h2>
                </div>

                <p
                  style={{
                    background: 'white',
                    height: 'auto',
                    padding: '15px',
                    marginTop: '20px',
                  }}
                >

                  Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience. User experience is central to the web designing process. Websites have an array of elements presented in ways that make them easy to navigate.
                </p>

                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={projects1}
                      alt="First slide"
                      style={{width: '100%', borderRadius: '15px'}}
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={projects2}
                      alt="Second slide"
                      style={{width: '100%', borderRadius: '15px'}}
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={projects1}
                      alt="Third slide"
                      style={{width: '100%', borderRadius: '15px'}}
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

              </div>

            </div>

            <div class="col-3 right">

              <div className="color">

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
                          {' '}My Tools:
                        </h4>
                      </div>
                    </div>
                  </div>

                  <ListGroup
                    style={{marginBottom: '20px', textAlign: 'center'}}
                    variant="flush"
                  >
                    <ListGroup.Item>CSS/SCSS</ListGroup.Item>
                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                    <ListGroup.Item>Adobe XD</ListGroup.Item>
                    <ListGroup.Item>Anima</ListGroup.Item>
                  </ListGroup>

                </p>

              </div>

              <div className="aside3">

                <img
                  style={{width: '100%', borderRadius: '15px'}}
                  src={projects2}
                  alt="web dev"
                />

              </div>

              <Accordion style={{marginTop: '20px'}}>
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

          </div>

          {/* ### */}

          <div style={{marginTop: '20px', height: '50px'}} class="footer">

            {/* ### */}

            

            {/* ### */}

            <div>

              Resize the browser window to see how the content respond to the resizing.

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Webdesign;
