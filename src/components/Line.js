import React from 'react';
import socialLinks from '../constants/social_links';
import '../assets/css/footer.css';

const Line = () => {
  return (
    <footer className="footer1">
      <div>
        <h4
        style={{marginTop:"25px"}}>
          Portfolio | Sebastian Weissenborn
        </h4>
        <div className="footer-links social-links">
          {socialLinks.map (link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Line;