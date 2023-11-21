import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import 'semantic-ui-css/semantic.min.css';
import { StaticImage } from 'gatsby-plugin-image';
import Bench from '../components/Bench/Bench';  

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

const Webdevelopment = ({ data }) => {



  console.log(data);
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
    },
  } = data;
  return (
    <div>
      <Seo title="Stack" />
      <div style={{}} className="head-top">
        <Seo title="Stack" />
        <div style={{ margin: 'auto', marginBottom: '15px' }} className="top-web">
          <header className="hero">
            <div
              style={{
                height: '91vh',
                backgroundColor: 'lightblue',
                display: 'contents',
              }}
            // class="ag-maecenas_title"
            >
              <div style={{ marginTop: '50px' }} class="ag-format-container">
                <article className="hero-info">
                  <div
                    className="webdevelopment-stack"
                    style={{ width: '350px' }}
                  >
                    <h1
                      style={{ textAlign: 'center', color: 'var(--clr-grey-1)' }}
                    >
                      i'm sebastian
                    </h1>
                    <h4 style={{ textAlign: 'center', color: 'white' }}>
                      Building digital solutions that bring your ideas to life.
                    </h4>
                    <div style={{ margin: 'auto' }} className="underline" />

                    <div
                      className="center"
                      style={{ display: 'flex', justifyContent: 'center' }}
                    />
                  </div>
                </article>
                <div
                  style={{
                    // width:"400px",
                  }}
                  className="h2-h4"
                >
                </div>
                {/* <StaticImage
                  style={{}}
                  src="../assets/images/group.png"
                  alt="portfolio"
                  className="hero-img8"
                  placeholder="blurred"
                /> */}
              </div>
            </div>
          </header>
          <div className="Test2">
            <div style={{ height: '70px' }} className="header1">
              <h2 className="title-web" style={{ marginBottom: '0px' }}>
                Webdevelopment
              </h2>
            </div>
            <div className="row" style={{ background: 'var(--clr-grey-10)' }}>

              <div
                style={{ padding: '15px 15px 0px 15px' }}
                className="col-3 menu"
              >
                <Bench />
              </div>
              <div
                style={{
                  padding: '15px',
                  background: 'white',
                  marginTop: '15px',
                }}
                className="col-6"
              >
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="semantic-ui-1">
                  <div class="ui breadcrumb">
                    <div class="active section " href="/adobe" >Stack</div>
                    <div class="divider">/</div>
                    <a class="section" href='/web-design'>Webdesign</a>
                    <div class="divider">/</div>
                    <a class="section" href='/adobe'>Adobe</a>
                  </div>
                </div>
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
                          <h3 style={{ textAlign: 'center' }}>{title}</h3>
                          <p
                            style={{ textAlign: 'center', marginBottom: '40px' }}
                          >
                            {info}
                          </p>
                        </div>
                        <h4 style={{ textAlign: 'center' }}>{title1}</h4>
                        <div
                          className="about-stack"
                          style={{
                            display: 'table',
                            margin: 'auto',
                            marginBottom: '40px',
                            textAlign: 'center',
                          }}
                        >
                          {stack.map(item => {
                            return <span key={item.id}>{item.title}</span>;
                          })}
                        </div>
                        <h4 style={{ textAlign: 'center' }}>{title2}</h4>
                        <div
                          className="about-stack"
                          style={{
                            display: 'table',
                            margin: 'auto',
                            marginBottom: '40px',
                            textAlign: 'center',
                          }}
                        >
                          {stack1.map(item => {
                            return <span key={item.id}>{item.title}</span>;
                          })}
                        </div>
                        <h4 style={{ textAlign: 'center' }}>{title3}</h4>
                        <div
                          className="about-stack"
                          style={{
                            display: 'table',
                            margin: 'auto',
                            marginBottom: '40px',
                            textAlign: 'center',
                          }}
                        >
                          {stack2.map(item => {
                            return <span key={item.id}>{item.title}</span>;
                          })}
                        </div>
                        <h4 style={{ textAlign: 'center' }}>{title4}</h4>
                        <div
                          className="about-stack"
                          style={{
                            display: 'table',
                            margin: 'auto',
                            textAlign: 'center',
                          }}
                        >
                          {stack3.map(item => {
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