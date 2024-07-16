import React, { useEffect } from "react";
import "./HomeSec.css";
import { motion } from "framer-motion";
import WOW from "wowjs";
import { HashLink as Link } from "react-router-hash-link";

//header section button transition
const header_btn_transition = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

// //main function
function HomeSec() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);


  //return
  return (
    <div>
      <header>
        <div className="view main_div" id="home">
          <div className="mask">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                  <h1 className="white-text mb-2 header_txt">
                    I am Sameeullah
                  </h1>
                  <h4
                    className="mb-3 pb-2 white-text header_des_txt"
                  >
                    I am UI/UX Designer
                  </h4>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    type="button"
                    className="btn btn-md"
                    style={{ borderRadius: "30px", backgroundColor: "darkcyan", color: "white", marginLeft: "0px" }}
                  >
                    <Link exact="true" to="#contact" smooth className="contactBtn">
                      Contact
                    </Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeSec;
