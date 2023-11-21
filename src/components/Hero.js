import React from 'react';
import {Link} from 'gatsby';
import socialLinks from '../constants/social_links';
import {StaticImage} from 'gatsby-plugin-image';
import '../assets/css/hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>

            <h1 style={{textAlign: 'center'}}>i'm sebastian</h1>
            <h4 style={{textAlign: 'center', color: 'white'}}>
              freelance web and mobile UI/UX Designer
            </h4>
            <div style={{margin: 'auto'}} className="underline" />

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            >

              <Link style={{background: 'white'}} to="/contact" className="btn">
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
        style={{width:"65%", margin:"auto"}}
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;