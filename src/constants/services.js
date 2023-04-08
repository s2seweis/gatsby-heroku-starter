import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text1: `I build modern websites in HTML, CSS, JAVASCRIPT and TYPESCRIPT `,
    text2: ` read more`,
    
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text1: `Every project has its own target group.  I am able to create attractive web designs with CSS/SCSS and Adobe Dreamweaver`,
    text2: `read more`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "graphic design",
    text1: `Other services: image editing , design of flyers, design of logos, optimization of instergram and facebook websites`,
    text2: `read more`,
  },
]

export default services
