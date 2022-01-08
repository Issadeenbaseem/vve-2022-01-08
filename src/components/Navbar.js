import React from "react"
import { Link } from "gatsby"

export default function Navbar() {

 
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Image" />
            </Link>
          </div>

          <div className="site-menu">
            <ul>
            <li>
                <Link to="/"  activeClassName="active" >Home</Link>
              </li>
              <li>
                <Link to="/services"  activeClassName="active">Services</Link>
              </li>
              
              <li>
                <Link to="/careers"  activeClassName="active">Careers</Link>
              </li>
              <li>
                <Link to="/about-us" activeClassName="active">About Us</Link>
              </li>
              <li>
                {/* <Link to="">Media</Link> */}
                <p style={{ color:'white' }}>Media</p>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">Contact Us</Link>
              </li>
              
            </ul>
          </div>

          <div className="hamburger">
            <div id="hamburger">
              <span></span> <span></span> <span></span>
            </div>
            <div id="cross">
              <span></span> <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
