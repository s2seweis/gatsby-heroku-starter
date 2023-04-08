import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Programming Languages: HTML, CSS, and JavaScript`,
    text: `Frameworks/ Libraries: React, Gatsby, Node, Angular, jQuery,  `,
    text: `Database: Firebase and PostgreSQL  `,
    text: `Other Keywords: Redux, GraphQL, Serverles Functions, Stripe, Webhooks,  Websockets  `,

  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default services
