import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';


function Header() {
    return (
    // Fixed Header
    <div className="header">
        <div className="header-container">
            <div className="header-title">Machine Learning Blogs</div>
            <div className="header-links">
                <a href="#about">Write</a>
                <a href="#services">Index</a>
                <a href="#contact">Next Article</a>
            </div>
        </div>
  </div>
    )
}

export default Header