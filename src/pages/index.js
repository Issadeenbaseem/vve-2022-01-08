import React from "react"

import Layout from "../components/Layout"
import IndexHeader from "../components/IndexHeader"
import IndexOverview from "../components/IndexOverview"
import IndexHighlights from "../components/IndexHighlights"
import IndexServices from "../components/IndexServices"
import IndexHighlightAlt from "../components/IndexHighlightAlt"
import App from "../components/App"

const Home = () => {
  return (
    <Layout pageTitle="Home">
      
      <div>
        <IndexHeader />
        <IndexOverview />
        <IndexHighlights />
        {/* <IndexHighlightAlt/> */}
        <div className="sizeBox"></div>
        <IndexServices />

        <section className="content-section-map">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="section-title-our">
                  <h2></h2>
                </div>
              </div>

              <div className="col-lg-8">
                <figure className="side-image">
                  <App />
                </figure>
              </div>

              <div className="col-lg-4  align-items-cente" >
                <div className="section-title">
                  <h2></h2>
                </div>
                <div className="side-content">
                  <div className="side-content">
                    <h5>Our Presence</h5>

                    <ul className="custom-list" >
                      <li>
                      <i class="lni lni-checkmark"></i>   Srilanka
                      </li>
                      <li>
                      <i class="lni lni-checkmark"></i>   Maldives
                      </li>
                      <li>
                      <i class="lni lni-checkmark"></i>  Bangladesh
                      </li>
                      <li>
                      <i class="lni lni-checkmark"></i>    Africa
                      </li>
                      <li>
                      <i class="lni lni-checkmark"></i>   Middle East
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Home
