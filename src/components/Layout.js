import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import '../assets/css/layout.css';
import Line from "./Line"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Line />
    </>
  )
}

export default Layout