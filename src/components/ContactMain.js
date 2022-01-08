import React from "react"

function ContactMain() {
  return (
    <div>
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-box">
                <figure>
                  <img src="/images/icon-global.png" alt="Image" />
                </figure>
                <h6>Head Office</h6>
                <p className="p12"> 123/5 Pannipitiya Road
                 Battaramulla<br />
                 10120,
                 <p>Sri Lanka</p>
                 </p>
                  
                  
                 
                
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-box">
                <figure>
                  <img src="/images/icon-phone.png" alt="Image" />
                </figure>
                <h6>Phones</h6>
                <p className="p12">
                  <p>  <a href="tel: +94 11 364 1642"> +94 11 364 1642</a></p>
                  <p><a href="tel:+94 77 759 0844">+94 77 759 0844</a></p>
                  <p>   <a href="tel:+94 71 628 6611">+94 71 628 6611</a></p>
              
                
               
                  
                
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-box">
                <figure>
                  <img src="/images/icon-email.png" alt="Image" />
                </figure>
                <h6>Write to Us</h6>
                <p className="p12">
                  <a href="mailto:escalations@virtue.lk">
                    escalations@virtue.lk
                  </a>
                  - Escalations
                </p>
                <p>
                  <a href="mailto:sales@virtue.lk">sales@virtue.lk</a> -
                  Marketing
                </p>
                <p>
                  <a href="mailto:support@virtue.lk">support@virtue.lk</a> -
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactMain
