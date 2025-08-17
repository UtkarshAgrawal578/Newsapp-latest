import React, { useState } from 'react'
import {Link} from "react-router";
import "./Navbar.css";
const Navbar=(props)=>  {

  
    const [isOpen, setIsOpen] = useState(false);



    return (
      <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          NewsHub
        </Link>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/business" onClick={() => setIsOpen(false)}>Business</Link></li>
          <li><Link to="/entertainment" onClick={() => setIsOpen(false)}>Entertainment</Link></li>
          <li><Link to="/general" onClick={() => setIsOpen(false)}>General</Link></li>
          <li><Link to="/health" onClick={() => setIsOpen(false)}>Health</Link></li>
          <li><Link to="/science" onClick={() => setIsOpen(false)}>Science</Link></li>
          <li><Link to="/sports" onClick={() => setIsOpen(false)}>Sports</Link></li>
          <li><Link to="/technology" onClick={() => setIsOpen(false)}>Technology</Link></li>

          {/* Toggle Mode Button */}
          {/* <li>
            <button className="toggle-btn" onClick={props.togglemode1}>
              {props.text1}
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
    )
}
export default Navbar
