import React from 'react';
import {FaCode, FaSketch, FaAndroid} from 'react-icons/fa';

import {Link} from 'gatsby';

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: 'web development',
    text1: `I build modern websites in HTML, CSS, JAVASCRIPT and TYPESCRIPT. `,

    // text2: ` read more`,
    // text2:               <p >test</p>
    text2: (
      <Link to="/web-development" className="btn1">
        read more1
      </Link>
    ),
  },


  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: 'web design',
    text1: `Every project has its own requirements.  I am able to create attractive web designs with CSS/SCSS and Adobe Dreamweaver.`,
    text2: (
      <Link to="/web-design" className="btn1">
        read more2
      </Link>
    ),
  },


  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: 'adobe',
    text1: `Image Editing , Design of Flyers, Design of Logos, Optimization of Instergram/Facebook websites.`,
    text2: (
      <Link to="/adobe" className="btn1">
        read more3
      </Link>
    ),
  },


];

export default services;
