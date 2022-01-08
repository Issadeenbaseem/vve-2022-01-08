import React from 'react'

 function IndexHighlights() {
    return (
        <div>
             <section
            className="content-section white-space-bottom"
            data-background="#f7f6f1"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="section-title text-left">
                    <h2>Highlights</h2>
                  </div>
                </div>
                {/* font-weight: 600;
    margin-bottom: 20px;
    font-size: 22px; */}

               
                <div className="swiper-container  highlight-slider">
                  
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="step-box">
                        <figure className="image">
                          <img src="/images/step01.jpg" alt="Image" />
                        </figure>
                        <div className="content">
                          {" "}
                          <span>01.</span>
                          <figure className="icon">
                            <img src="/images/professional-team.png" alt="Image" />
                          </figure>
                          <h6>Experienced and Professional Team</h6>
                          <p>
                            Excellence in engineering & project management and
                            execution.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="step-box">
                        <figure className="image">
                          <img src="/images/step02.jpg" alt="Image" />
                        </figure>
                        <div className="content">
                          {" "}
                          <span>02.</span>
                          <figure className="icon">
                            <img src="/images/personalized-services.png" alt="Image" />
                          </figure>
                          <h6> Personalized Services</h6>
                          <p>
                            Tailored to your exact needs, context, preferences,
                            and wishes.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="step-box">
                        <figure className="image">
                          <img src="/images/step03.jpg" alt="Image" />
                        </figure>
                        <div className="content">
                          {" "}
                          <span>03.</span>
                          <figure className="icon">
                            <img src="/images/quality.png" alt="Image" />
                          </figure>
                          <h6>Constant Quality and Delivery</h6>
                          <p>
                            People, processes, standards & systems for constant
                            quality, and timelines .{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="step-box">
                        <figure className="image">
                          <img src="/images/step04.jpg" alt="Image" />
                        </figure>
                        <div className="content">
                          {" "}
                          <span>04.</span>
                          <figure className="icon">
                            <img src="/images/target.png" alt="Image" />
                          </figure>
                          <h6>Single Destination</h6>
                          <p>
                            Entire undertaking, sourcing, design, and delivery
                            from start to completion .{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="step-box">
                        <figure className="image">
                          <img src="/images/step05.jpg" alt="Image" />
                        </figure>
                        <div className="content">
                          {" "}
                          <span>05.</span>
                          <figure className="icon">
                            <img src="/images/technical-support.png" alt="Image" />
                          </figure>
                          <h6>Impeccable Track Record</h6>
                          <p>Asserted by client testaments. </p>
                        </div>
                      </div>
                    </div>

                  </div>

                   
                </div>
                
              </div>
              <div className="swiper-pagination"></div>

            </div>
          </section>
            
        </div>
    )
}
export default IndexHighlights

