import React, {useEffect} from "react";
import "./Services.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Learning section for home
const Services = () => {

    const { ref, inView } = useInView({
        threshold: 0.2,
      });
      const animation_left = useAnimation();
      const animation_right = useAnimation();
    
      useEffect(() => {
        if (inView) {
          animation_left.start({
            x: 0,
            transition: {
              type: "spring",
              duration: 130,
              bounce: 0.3,
            },
          });
          animation_right.start({
            x: 0,
            transition: {
              type: "spring",
              duration: 130,
              bounce: 0.3,
            },
          });
        }
        if (!inView) {
          animation_left.start({ x: "-20vw" });
          animation_right.start({ x: "-20vw" });
        }
      }, [inView]);


  //return statement
  return (
    <div ref={ref} id="services">
      <div className="container-fluid p-5 service_div">
        <section className="text-center white-text">
          <h2 className="font-weight-bold mb-4 pb-2 text-uppercase">
            Services
            <hr
              color="white"
              width="135px"
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

          <motion.div
           animate={animation_left}
            className="row mx-0"
            style={{ justifyContent: "center", marginTop: "50px" }}
          >
            <div className="col-lg-3 col-md-12 mb-4 pr-0">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/external-chloe-kerismaker/2x/external-Technology-education-chloe-kerismaker.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>Web Design</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{ fontSize: "12px", color: "darkgray" }}
                  >
                    User Experience (UX) — Another specialization of UI, user
                    interface web design, this one dealing with user behavior
                    and feeling when using the site or app.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 mb-4 pr-0">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/office/452/design.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>Interaction Design</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{ fontSize: "12px", color: "darkgray" }}
                  >
                    It is interaction between end user, users and products and
                    creating products that enable the users to achieve their
                    objective(s) in the best way possible.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 mb-4 pr-0 ">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/external-others-colourcreatype/2x/external-design-creatype-user-interface-filled-outline-others-colourcreatype.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>UX Research</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{
                      fontSize: "12px",
                      color: "darkgray",
                      textAlign: "justify",
                    }}
                  >
                    Understanding the users, their needs & identifying
                    requirements of product using the right UX research
                    technique at the right time in the product development
                    process.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2nd row */}
          <motion.div
           animate={animation_right}
            className="row mx-0"
            style={{ justifyContent: "center", marginTop: "5px" }}
          >
            <div className="col-lg-3 col-md-12 mb-4 pr-0 ">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/2x/external-technology-artificial-intelligence-and-machine-learning-parzival-1997-outline-color-parzival-1997.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>Graphic Designing</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{
                      fontSize: "12px",
                      color: "darkgray",
                      textAlign: "justify",
                    }}
                  >
                    perspective by focusing on the entire interaction between a
                    user and a product. Graphic design is often just one part of
                    the bigger user experience.
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 mb-4 pr-0">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-technology-new-media-flaticons-flat-flat-icons.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>Visual Design</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{
                      fontSize: "12px",
                      color: "darkgray",
                      textAlign: "justify",
                    }}
                  >
                    Visual design focuses on the aesthetics of a site s by
                    strategically implementing branding, images, colours, fonts,
                    and other elements
                  </p>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12 mb-4 pr-0 ">
              <div className="bg-dark card z-depth-3">
                <div className="view overlay my-4">
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-technology-new-media-flaticons-flat-flat-icons-2.png"
                    className="mx-auto d-block"
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>

                <div className="card-body">
                  <h6
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>UI Development</span>
                  </h6>

                  <p
                    className="card-text text-center"
                    style={{ fontSize: "12px", color: "darkgray" }}
                  >
                    visual design for transforming a front end code functional
                    in a web browser, to deliver a complete usable product UI
                    development is imperative.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Services;
