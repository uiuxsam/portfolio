import React from "react";
import "./Testomainals.css";
import irfan_img from "../../Assets/irfan.png"

function Testomainails() {
  return (
    <div>
      <div className="container-fluid p-5 service_div">
        <section className="text-center white-text">
          <h2 className="font-weight-bold mb-4 pb-2 text-uppercase">
            Testimonials
            <hr
              color="white"
              width="175px"
              className="mt-3"
              style={{
                margin: "auto",
                height: "2px",
                backgroundColor: "darkcyan",
              }}
            />
          </h2>

          <p className="lead text-muted mx-auto w-responsive services_des">
            In today’s digital age, every touch point, impression, and branded
            interaction contribute an inspiring user experience. At Royal Cyber,
            we help you navigate the complexity of designing and improving your
            user experience. With our complete line UX services and our zero
            investment UX audit, we’ll help you design a UX strategy that best
            fits your business goals and improve your UI productivity.
          </p>

          <div
            className="row mx-0"
            style={{ justifyContent: "center", marginTop: "50px" }}
          >
            <div className="col-lg-4 col-md-12 mb-4 pr-0">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <div class="" style={{ color: "darkcyan" }}>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star-half-alt"> </i>
                  </div>
                </div>

                <div className="card-body">
                  <p
                    className="card-text text-center"
                    style={{ fontSize: "12px", color: "darkgray" }}
                  >
                    User Experience (UX) — Another specialization of UI, user
                    interface web design, this one dealing with user behavior
                    and feeling when using the site or app.
                  </p>
                  <div class="avatar d-flex align-items-center pl-3">
                    <img
                      src={irfan_img}
                      style={{ maxWidth: "50px" }}
                      class="rounded-circle z-depth-1"
                      alt="woman avatar"
                    />
                    <h6
                      class="font-weight-bold  pl-2"
                      style={{ color: "darkgray" }}
                    >
                      Irfan Bangash
                    </h6>
                  </div>

                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4 pr-0">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <div class="" style={{ color: "darkcyan" }}>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star"> </i>
                    <i class="fas fa-star-half-alt"> </i>
                  </div>
                </div>

                <div className="card-body">
                  <p
                    className="card-text text-center"
                    style={{ fontSize: "12px", color: "darkgray" }}
                  >
                    User Experience (UX) — Another specialization of UI, user
                    interface web design, this one dealing with user behavior
                    and feeling when using the site or app.
                  </p>
                  <div class="avatar d-flex align-items-center pl-3">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                      style={{ maxWidth: "50px" }}
                      class="rounded-circle z-depth-1"
                      alt="woman avatar"
                    />
                    <h6
                      class="font-weight-bold  pl-2"
                      style={{ color: "darkgray" }}
                    >
                      ZaiUllah
                    </h6>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testomainails;
