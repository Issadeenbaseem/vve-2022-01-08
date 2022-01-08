import React from "react"

function ContactForm() {
  return (
    <div>
      <section className="content-section-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title text-left">
                <h1>Send your Queries</h1>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="contact-form">
                <div className="form-group">
                  <span>Full Name</span>
                  <input type="text"></input>
                </div>

                <div className="form-group">
                  <span>Your E-mail</span>
                  <input type="text"></input>
                </div>

                <div className="form-group">
                  <span>Subject</span>
                  <input type="text"></input>
                </div>

                <div className="form-group">
                  <span>Your Message</span>
                  <textarea></textarea>
                </div>

                <div className="form-group">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactForm
