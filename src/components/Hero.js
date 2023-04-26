import React from 'react';
import {Link} from 'gatsby';
import socialLinks from '../constants/social_links';
// import heroImg from "../assets/images/hero.svg"
import {StaticImage} from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>


          <h1 style={{textAlign: 'center'}}>i'm sebastian</h1>
            <h4 style={{textAlign: 'center'}}>
              freelance web and mobile UI/UX Designer
            </h4>
            <div 
            
            style={{margin:"auto"}}
            
            className="underline" />
            

            <div
              className="center"


              style={{display: 'flex', justifyContent: 'center'}}

              
            >

              <Link
                style={{background:"white"}}
                to="/contact"
                className="btn"
              >
                contact me
              </Link>

            </div>

            <div className="social-links">
              {socialLinks.map (link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />


        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  );
};

export default Hero;
