// import React from 'react';
import {graphql} from 'gatsby';
// import Title from '../components/Title';
import Seo from '../components/Seo';

import Card from 'react-bootstrap/Card';

// import test3 from '../assets/images/test3.jpg';

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

// ###

// import Seo from '../components/Seo';

// import Game from '../components-game/Game';

// import hero from '../assets/images/hero.svg';
// import projects from '../assets/images/projects-1.jpg';

// import logo5 from '../assets/images/logo5.svg';

// import projects1 from '../assets/images/projects-4.jpg';
// import projects2 from '../assets/images/projects-3.jpg';

// ###
// import '../assets/css/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// ###

// import '../components/custom.css';

import 'semantic-ui-css/semantic.min.css';

import React, {useState} from 'react';

import {StaticImage} from 'gatsby-plugin-image';

import {Breadcrumb} from 'semantic-ui-react';

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

      <Seo title="Stack" />

      <div style={{}} className="head-top">

        <Seo title="Stack" />

        <div style={{margin: 'auto', marginBottom: '15px'}} className="top-web">

          {/* <header className="hero">
          

            <section className="section-center hero-center">

              <article className="hero-info1">
                <div>

                  <h1 style={{textAlign: 'center'}}>Hello my friend</h1>
                  <h3
                    className="h3-webdesign"
                    style={{
                      textAlign: 'center',
                      width: '350px',
                      textTransform: 'inherit',
                    }}
                  >
                    Just a short list of tools that I currently use. At the moment I am busy with webdesign.
                  </h3>
                  <div style={{margin: 'auto'}} className="underline" />

                </div>
              </article>

              <StaticImage
                src="../assets/images/group.png"
                alt="portfolio"
                className="hero-img"
                placeholder="blurred"
              />

              

            </section>

          </header> */}

          <header className="hero">

            <div
              style={{
                height: '91vh',
                backgroundColor: 'lightblue',
                display: 'contents',
              }}
              class="ag-maecenas_title"
            >
              <div style={{marginTop: '50px'}} class="ag-format-container">

                <article className="hero-info">
                  <div
                    className="webdevelopment-stack"
                    style={{width: '350px'}}
                  >

                    <h1
                      style={{textAlign: 'center', color: 'var(--clr-grey-1)'}}
                    >
                      i'm sebastian
                    </h1>
                    <h4 style={{textAlign: 'center', color: 'white'}}>
                      Building digital solutions that bring your ideas to life.
                    </h4>
                    <div style={{margin: 'auto'}} className="underline" />

                    <div
                      className="center"
                      style={{display: 'flex', justifyContent: 'center'}}
                    />

                  </div>
                </article>

                <div
                  style={{
                    // width:"400px",
                  }}
                  className="h2-h4"
                >

                  {/* <h2
                style={{margin:"auto", width:"350px"}}
                >Building digital solutions that bring your ideas to life.</h2> */}

                  {/* <h4
                style={{marginTop:"50px"}}
                >
                 Building digital solutions that bring your ideas to life.
                </h4> */}

                </div>

                <StaticImage
                  style={{}}
                  src="../assets/images/group.png"
                  alt="portfolio"
                  className="hero-img8"
                  placeholder="blurred"
                />

              </div>
            </div>

          </header>

          {/* Part:3 - ############## End*/}

          <div className="Test2">

            <div style={{height: '70px'}} className="header1">

              <h2 className="title-web" style={{marginBottom: '0px'}}>
                Webdevelopment
              </h2>

            </div>

            <div className="row" style={{background: 'var(--clr-grey-10)'}}>
              <div
                style={{padding: '15px 15px 0px 15px'}}
                className="col-3 menu"
              >

                <div>

                  <svg
                    style={{width: '100%'}}
                    width="120"
                    height="120"
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

                </div>

              </div>

              <div
                style={{
                  padding: '15px',
                  background: 'white',
                  marginTop: '15px',
                }}
                className="col-6"
              >

                {/* ### */}

                {/* <Breadcrumb style={{display: 'flex', justifyContent: 'center'}}>
                  <Breadcrumb.Item active style={{marginRight: '10px'}}>
                    Webdevelopment/
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/web-design">
                    Webdesign{' '}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/404">Adobe</Breadcrumb.Item>
                </Breadcrumb> */}

                {/* <Breadcrumb>
                  <Breadcrumb.Section link>Home</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>Store</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                </Breadcrumb> */}

                <div 
                style={{display:"flex", justifyContent:"center"}}
                className="semantic-ui-1">

                  <div class="ui breadcrumb">
                    {/* <a class="section" href='/web-development'>Stack</a> */}
                    <div class="active section " href="/adobe" >Stack</div>

                    <div class="divider">/</div>
                    <a class="section" href='/web-design'>Webdesign</a>
                    {/* <div class="active section " href="/adobe" >Webdesign</div> */}


                    <div class="divider">/</div>
                    <a class="section" href='/adobe'>Adobe</a>
                    {/* <div class="active section " href="/adobe" >Adobe</div> */}

                  </div>
                </div>

                {/* ### */}

                <div className="background">

                  <section
                    style={{
                      marginTop: '0px',
                      padding: '0px',
                      background: 'white',
                    }}
                    className="about-page"
                  >

                    <div className="section-center2 about-center2">

                      <article
                        className="about-text"
                        style={{
                          padding: '0px',
                          background: 'white',
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

                </div>

              </div>

            </div>

            <div
              style={{
                // marginTop: '20px',
                height: '50px',
              }}
              className="footer"
            >

              <div>

                Resize the browser window to see how the content respond to the resizing.

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Webdevelopment;
