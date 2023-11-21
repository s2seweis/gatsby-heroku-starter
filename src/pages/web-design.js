import Seo from '../components/Seo';
import png1 from '../assets/images/1.png';
import png2 from '../assets/images/2.png';
import png3 from '../assets/images/3.png';
import '../assets/css/custom.css';
import {Carousel, ListGroup} from 'react-bootstrap';
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Webdesign = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ background: 'var(--clr-grey-10)' }} className="head-top">
      <Seo title="Webdesign" />
      <div className="top-head" />
      <div style={{ margin: 'auto', marginBottom: '15px' }} className="top-web">
        <header className="hero">
          <section className="section-center hero-center">
            <article className="hero-info">
              <div>
                <h1 style={{ textAlign: 'center', color: 'var(--clr-grey-1)' }}>
                  i'm sebastian
                </h1>
                <h4 style={{ textAlign: 'center', color: 'white' }}>
                  Crafting beautiful and functional websites.
                </h4>
                <div style={{ margin: 'auto' }} className="underline" />
                <div
                  className="center"
                  style={{ display: 'flex', justifyContent: 'center' }}
                />
              </div>
            </article>
            <StaticImage
              src="../assets/images/5.png"
              alt="portfolio"
              className="hero-img"
              placeholder="blurred"
            />
          </section>
          <div
            style={{
              height: '91vh',
              backgroundColor: 'lightblue',
              display: 'contents',
            }}
            class="ag-maecenas_title"
          />
        </header>
        <div className="Test2">
          <div class="header1">
            <h2 className="title-web">
              Webdesign{' '}
            </h2>
          </div>
          <div class="row" style={{ background: 'var(--clr-grey-10)' }}>
            <div class="col-3 menu">
              <div className="color" style={{ textAlign: 'center' }}>
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
                          style={{ textAlign: 'center' }}
                          class="animate-charcter"
                        >
                          {' '}My Tools:
                        </h4>
                      </div>
                    </div>
                  </div>
                  <ListGroup style={{ marginBottom: '20px' }} variant="flush">
                    <ListGroup.Item>Adobe XD.</ListGroup.Item>
                    <ListGroup.Item>Adobe Photoshop.</ListGroup.Item>
                    <ListGroup.Item>
                      Adobe Illustrator.
                    </ListGroup.Item>
                    <ListGroup.Item>CSS/SCSS</ListGroup.Item>
                    <ListGroup.Item>Grid/Bootstrap</ListGroup.Item>
                    <ListGroup.Item>Media Queries</ListGroup.Item>
                  </ListGroup>
                </p>
              </div>
              <h4 style={{ textAlign: 'center' }}>Colors for the Portfolio:</h4>
              <div
                style={{ display: 'flex', background: 'black', padding: '2px' }}
                className="colors-overview"
              >
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'lightblue',
                    fontSize: 'x-small',
                  }}
                >
                  #ADD8E6
                </div>
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    // backgroundColor: 'lightblue',
                    background: 'linear-gradient(to bottom right, #ADD8E6, #76C3F2)',
                    fontSize: 'x-small',
                  }}
                >
                  #ADD8E6/#76C3F2
                </div>
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'var(--clr-grey-10)',
                    fontSize: 'x-small',
                  }}
                >
                  var(--clr-grey-10)
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  background: 'black',
                  padding: '2px',
                  marginTop: '10px',
                }}
                className="colors-overview"
              >
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'var(--clr-grey-1)',
                    fontSize: 'x-small',
                    color: 'white',
                  }}
                >
                  var(--clr-grey-1)
                </div>
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    // backgroundColor: 'lightblue',
                    backgroundColor: '#ffffff',
                    fontSize: 'x-small',
                  }}
                >
                  #ffffff
                </div>
                <div
                  className="colors"
                  style={{
                    height: '150px',
                    width: '150px',
                    backgroundColor: 'var(--clr-grey-9)',
                    fontSize: 'x-small',
                  }}
                >
                  var(--clr-grey-9)
                </div>
              </div>
            </div>
            <div
              style={{
                padding: ',25px',
                background: 'white',
                marginTop: '15px',
              }}
              class="col-6"
            >
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                className="semantic-ui-1"
              >
                <div class="ui breadcrumb">
                  <a class="section" href="/web-development">Stack</a>
                  <div class="divider">/</div>
                  <div class="active section " href="/adobe">Webdesign</div>
                  <div class="divider">/</div>
                  <a class="section" href="/adobe">Adobe</a>
                </div>
              </div>
              <div className="background">
                <div class="container">
                  <h2
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      textAlign: 'center',
                      marginTop: '10px',
                      textTransform: 'capitalize',
                    }}
                    class="title"
                  >
                    <span class="title-word title-word-2">digital</span>
                    <span class="title-word title-word-3">experiences</span>
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
                  I build visually appealing, functional, and user-friendly websites that effectively communicate a message, provide a positive user experience, and ultimately achieve the goals of the website owner.
                  {' '}
                </p>
                <p style={{ textAlign: 'center' }}>
                  "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
                </p>
                <Carousel
                  style={{ background: 'lightblue', borderRadius: '25px' }}
                  activeIndex={index}
                  onSelect={handleSelect}
                >
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={png2}
                      alt="First slide"
                      style={{ width: '100%', borderRadius: '15px' }}
                    />
                    <Carousel.Caption>
                      <h3>Menu</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={png1}
                      alt="Second slide"
                      style={{ width: '100%', borderRadius: '15px' }}
                    />
                    <Carousel.Caption>
                      <h3>About</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={50000}>
                    <img
                      className="d-block w-100"
                      src={png3}
                      alt="Third slide"
                      style={{ width: '100%', borderRadius: '15px' }}
                    />
                    <Carousel.Caption>
                      <h3>Landing</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div class="col-3 right">
            </div>
          </div>
          <div style={{ marginTop: '20px', height: '50px' }} class="footer">
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