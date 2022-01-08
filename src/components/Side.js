import React from "react"
import { Link } from "gatsby"

export default function Side() {
  return (
    <>
      <aside className="side-widget">
        <div className="inner">
          <div className="logo">
            {" "}
            <a href="index.html">
              <img src="/images/logo.png" alt="Image" />
            </a>{" "}
          </div>

          <div className="hide-mobile">
            <h6 className="widget-title">ADDRESS</h6>
            <address className="address">
              <p>
                23/5 Pannipitiya Road, Battaramulla,
                <br />
                10120, Sri Lanka
              </p>
              <p>Phone <a style ={{color:'#FFFFFF'}}  href="tel:+94 77 759 0844 ">+94 77 759 0844 </a>| <a style ={{color:'#FFFFFF'}} href="tel:+94 71 628 6611">+94 71 628 6611</a></p>
            </address>
            <h6 className="widget-title">FOLLOW US</h6>
            <ul className="social-media">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="show-mobile">
            

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
          </div>

          <small>
            {" "}
            &#169; 2021 Virtue Value Engineering (Pvt) Ltd <br />{" "}
            <a href="https://pragicts.com/">
              <b style={{ color: "#FFFFFF" }}>Engineered by </b>
              <b style={{ color: "#F71735" }}>PragICTS</b>
            </a>{" "}
          </small>
        </div>
      </aside>
    </>
  )
}
