import React from "react";

function Footer() {
  return (
    <div className="bg-dark" style={{marginTop:"-50px"}}>
      <footer className="page-footer text-center font-small bg-dark">
        <div className="">
          <div className="pb-4 pt-4">
            <a href="https://www.facebook.com/profile.php?id=100008823001421" target="_blank">
              <i className="fab fa-facebook-f mr-3"></i>
            </a>

            <a href="https://twitter.com/SamiullahSagar1?t=7FSzxj6sNSskDu5G-mT8Zw&s=08" target="_blank">
              <i className="fab fa-twitter mr-3"></i>
            </a>

            <a
              href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4"
              target="_blank"
            >
              <i className="fab fa-youtube mr-3"></i>
            </a>

          </div>

          <div className="footer-copyright py-3">
            © 2024 Copyright:
            <a
              href="https://sameeullah.netlify.app/"
            >
              {" "}
             (S) Sameeullah All Reserved
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
