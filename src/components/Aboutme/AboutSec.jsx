import React, { useEffect } from "react";
import About_Pic from "../../Assets/me.png";
import "./About.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cv from "../../Assets/sameeullah_cv.pdf";

//main function
function AboutSec() {
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
      animation_right.start({ x: "20vw" });
    }
  }, [inView]);

  //return statement
  return (
    <div className="about_main_div" id="aboutme">
      <div ref={ref} className=" darken-3 py-5" style={{ overflow: "hidden" }}>
        <div className="container bg-dark py-5">
          <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
            <div className="row">
              <motion.div
                animate={animation_left}
                className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center"
              >
                <img
                  src={About_Pic}
                  className="img-fluid mt-5 about_img"
                  alt=""
                />
              </motion.div>

              <motion.div
                animate={animation_right}
                className="col-lg-6 mb-4 mb-lg-0 pt-lg-5 pt-xl-5"
              >
                <h3 className="font-weight-bold mb-4 white-text pt-lg-1 about_txt">
                  {" "}
                  About Me{" "}
                </h3>

                <p className="font-weight-bold white-text mb-4 about_heading_txt">
                  Hello There, I am{" "}
                  <span className="name_span sami_txt">Sameeullah</span>
                </p>

                <p className="text-muted about_description">
                As a seasoned Product Designer with over 6 months in the field, I've driven
significant digital transformations, such as scaling a startup from thousands to lack 
benchmark and amplifying a design community's growth by 567%. My journey
also includes building design stuffs. Combining creativity with functionality, I
consistently deliver user-centric experiences that yield impactful business
outcomes. With a history of spearheading teams and ventures, I'm committed to
championing design excellence and innovation.

                </p>

                <a
                  href={cv}
                  download="myCV"
                  className="btn btn-sm about_btn"
                  style={{
                    fontWeight: "bold",
                    height: "40px",
                    color: "white",
                    borderRadius: "30px",
                    backgroundColor: "darkcyan",
                    paddingTop: "12px",
                  }}
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
