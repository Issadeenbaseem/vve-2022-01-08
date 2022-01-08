import React from "react"

function IndexHeader() {
  return (
    <div>
      <header className="slider white-space-bottom">
        <div className="container">
          <div className="swiper-container slider-content">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="inner">
                  <h2>
                    Construction <b>Services</b>
                  </h2>
                  <p>Professional - Bespoke - Personalized</p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="inner">
                  <h2>
                    Constant <b>Quality</b> and Delivery
                  </h2>
                  <p>
                    Planning & execution with a focus on Macro & Micro details
                  </p>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="inner">
                  <h2>
                    Constant <b>Quality</b> and Delivery
                  </h2>
                  <p>
                    Redundancy at all parameters to minimize single point of
                    failure
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="inner">
                  <h2>
                    Constant <b>Quality</b> and Delivery
                  </h2>
                  <p>Proven Standard, Systems, and People</p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="inner">
                  <h2>
                    Constant <b>Quality</b> and Delivery
                  </h2>
                  <p>The professional and experienced team at all levels</p>
                </div>
              </div>
            </div>

            <div className="controls">
              <div className="swiper-pagination"></div>

              <div className="button-prev">
                <i className="lni lni-arrow-left"></i>
              </div>

              <div className="button-next">
                <i className="lni lni-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="swiper-container slider-main">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="slide-image"
                  data-background="/images/slide02.jpg"
                ></div>
              </div>

              <div className="swiper-slide">
                <div
                  className="slide-image"
                  data-background="/images/slide01.jpg"
                ></div>
              </div>

              <div className="swiper-slide">
                <div
                  className="slide-image"
                  data-background="/images/slide03.jpg"
                ></div>
              </div>
              <div className="swiper-slide">
                <div
                  className="slide-image"
                  data-background="/images/slide05.jpg"
                ></div>
              </div>
              <div className="swiper-slide">
                <div
                  className="slide-image"
                  data-background="/images/slide04.jpg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default IndexHeader
