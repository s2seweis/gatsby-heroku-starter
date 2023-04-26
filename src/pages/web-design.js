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

// ###

export const Webdesign = () => {
  const [index, setIndex] = useState (0);

  const handleSelect = (selectedIndex, e) => {
    setIndex (selectedIndex);
  };

  return (
    <div style={{background: 'var(--clr-grey-10)'}} className="head-top">

      <Seo title="Contact" />

      <div className="top-head"  />

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

            <svg
              width="84"
              height="84"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="study">
                <rect width="64" height="64" />
                <g id="smoke">
                  <path
                    id="smoke-2"
                    d="M9 21L9.55279 19.8944C9.83431 19.3314 9.83431 18.6686 9.55279 18.1056L9 17L8.44721 15.8944C8.16569 15.3314 8.16569 14.6686 8.44721 14.1056L9 13"
                    stroke="#797270"
                  />
                  <path
                    id="smoke-1"
                    d="M6.5 22L7.05279 20.8944C7.33431 20.3314 7.33431 19.6686 7.05279 19.1056L6.5 18L5.94721 16.8944C5.66569 16.3314 5.66569 15.6686 5.94721 15.1056L6.5 14"
                    stroke="#797270"
                  />
                </g>
                <g id="laptop">
                  <rect
                    id="laptop-base"
                    x="17"
                    y="28"
                    width="20"
                    height="3"
                    fill="#F3F3F3"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="laptop-screen"
                    x="18"
                    y="17"
                    width="18"
                    height="11"
                    fill="#5A524E"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="line-1"
                    x="20"
                    y="19"
                    width="14"
                    height="1"
                    fill="#F78764"
                  />
                  <rect
                    id="line-2"
                    x="20"
                    y="21"
                    width="14"
                    height="1"
                    fill="#F9AB82"
                  />
                  <rect
                    id="line-3"
                    x="20"
                    y="23"
                    width="14"
                    height="1"
                    fill="#F78764"
                  />
                  <rect
                    id="line-4"
                    x="20"
                    y="25"
                    width="14"
                    height="1"
                    fill="#F9AB82"
                  />
                </g>
                <g id="cup">
                  <rect
                    id="Rectangle 978"
                    x="5"
                    y="24"
                    width="5"
                    height="7"
                    fill="#CCC4C4"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <path
                    id="Ellipse 416"
                    d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 996"
                    x="6"
                    y="25"
                    width="3"
                    height="1"
                    fill="#D6D2D1"
                  />
                </g>
                <g id="books">
                  <rect
                    id="Rectangle 984"
                    x="58"
                    y="27"
                    width="4"
                    height="14"
                    transform="rotate(90 58 27)"
                    fill="#B16B4F"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 985"
                    x="56"
                    y="23"
                    width="4"
                    height="14"
                    transform="rotate(90 56 23)"
                    fill="#797270"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 986"
                    x="60"
                    y="19"
                    width="4"
                    height="14"
                    transform="rotate(90 60 19)"
                    fill="#F78764"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 993"
                    x="47"
                    y="20"
                    width="12"
                    height="1"
                    fill="#F9AB82"
                  />
                  <rect
                    id="Rectangle 994"
                    x="43"
                    y="24"
                    width="12"
                    height="1"
                    fill="#54504E"
                  />
                  <rect
                    id="Rectangle 995"
                    x="45"
                    y="28"
                    width="12"
                    height="1"
                    fill="#804D39"
                  />
                </g>
                <g id="desk">
                  <rect
                    id="Rectangle 973"
                    x="4"
                    y="31"
                    width="56"
                    height="5"
                    fill="#797270"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 987"
                    x="10"
                    y="36"
                    width="30"
                    height="6"
                    fill="#797270"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 975"
                    x="6"
                    y="36"
                    width="4"
                    height="24"
                    fill="#797270"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 974"
                    x="40"
                    y="36"
                    width="18"
                    height="24"
                    fill="#797270"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <line
                    id="Line 129"
                    x1="40"
                    y1="48"
                    x2="58"
                    y2="48"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <line
                    id="Line 130"
                    x1="22"
                    y1="39"
                    x2="28"
                    y2="39"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <line
                    id="Line 142"
                    x1="46"
                    y1="42"
                    x2="52"
                    y2="42"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <line
                    id="Line 131"
                    x1="46"
                    y1="54"
                    x2="52"
                    y2="54"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle 988"
                    x="11"
                    y="37"
                    width="28"
                    height="1"
                    fill="#54504E"
                  />
                  <rect
                    id="Rectangle 992"
                    x="5"
                    y="32"
                    width="54"
                    height="1"
                    fill="#9E9492"
                  />
                  <rect
                    id="Rectangle 989"
                    x="7"
                    y="37"
                    width="2"
                    height="1"
                    fill="#54504E"
                  />
                  <rect
                    id="Rectangle 990"
                    x="41"
                    y="37"
                    width="16"
                    height="1"
                    fill="#54504E"
                  />
                  <rect
                    id="Rectangle 991"
                    x="41"
                    y="49"
                    width="16"
                    height="1"
                    fill="#54504E"
                  />
                  <line
                    id="Line 143"
                    y1="60"
                    x2="64"
                    y2="60"
                    stroke="#453F3C"
                    stroke-width="2"
                  />
                </g>
              </g>
            </svg>

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
