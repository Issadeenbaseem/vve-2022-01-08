import React, { Component } from "react"

class CareerUpload extends Component {
  handleFileUpload = event => {
    console.log(event.target.files[0].name)
  }
  render() {
    return (
      <>
        <section className="content-sectioncareer">
          <div className="container">
            <div className="section-title ">
              <h2>Apply Now</h2>
            </div>
            <div className="row">
              <div className="col-12 container-upload">
              <form className="contact-form-upload">
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
                        <span>Upload Your CV</span>

                        <div className="btn-upload">
                          <input
                            ref="fileInput"
                            onChange={this.handleFileUpload}
                            type="file"
                            style={{ display: "none" }}
                            // multiple={false}
                          />
                          <button
                            type=""
                            onClick={() => this.refs.fileInput.click()}
                          >
                            Click Here to Upload
                          </button>
                        </div>
                      </div>

                      <div className="form-group">
                        <span>Your Message</span>
                        <textarea></textarea>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <input type="submit" value="Send Now" />
                          </div>
                        </div>
                      </div>
                    </form>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default CareerUpload
