import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_div">
      <div className="container">
        <section className="dark-grey-text text-center">
          <h2 className="font-weight-bold  pb-2 pt-5 white-text" id="contact">
            Get In Touch
          </h2>
          <hr
            color="white"
            width="135px"
            className="mt-0 mb-4"
            style={{
              margin: "auto",
              height: "2px",
              backgroundColor: "darkcyan",
            }}
          />

          <p className="lead text-muted mb-5 mx-auto w-responsive mb-3 blog_des">
            You can contact me on website or given mobile no or you can direct
            mail me.
          </p>

          <div className="container row text-center mt-3">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <i
                className="fas fa-map-marker-alt fa-2x"
                style={{ color: "darkcyan" }}
              ></i>

              <p className="font-weight-bold my-3">Address</p>

              <p className="text-muted">
                Nari Kak, Billitang Kohat <br /> Near by Pindi Road Kohat
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <i
                className="fas fa-phone fa-2x"
                style={{ color: "darkcyan" }}
              ></i>

              <p className="font-weight-bold my-3">Phone number</p>

              <p className="text-muted">
                +923340709062 <br /> +923285490987
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <i
                className="fas fa-envelope fa-2x"
                style={{ color: "darkcyan" }}
              ></i>

              <p className="font-weight-bold my-3">E-mail</p>

              <p className="text-muted">
                ssafridi780@gmail.com <br /> sameeullahkust12@gmail.com
              </p>
            </div>
          </div>

          <div className="container my-5 px-0">
            <section className="p-5 my-md-5 text-center">
              <form
                action="mailto:muhammadirfan9273@gmail.com"
                method="post"
                enctype="text/plain"
                className="mb-5 mx-md-5"
              >
                <div className="container row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      id="name"
                      className="form-control bg-dark grey-text"
                      placeholder="Full Name"
                      style={{ border: "none" }}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control bg-dark grey-text"
                      placeholder="Your Email"
                      style={{ border: "none" }}
                    />
                  </div>
                </div>

                <div className="container row">
                  <div className="col-md-12">
                    <div className="form-group mb-4">
                      <textarea
                        className="form-control rounded bg-dark grey-text"
                        id="message"
                        rows="3"
                        placeholder="How can we help?"
                        style={{ border: "none" }}
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-md white-text"
                        style={{
                          backgroundColor: "darkcyan",
                          borderRadius: "30px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
