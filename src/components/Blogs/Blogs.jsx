import React from "react";
import "./Blogs.css";


function Blogs() {
  return (
    <div className="bg-dark" id="blogs">
      <div className="container">
        <section className="dark-grey-text text-center">
          <h2 className="font-weight-bold  pb-2 pt-5 white-text">My Blogs</h2>
          <hr
            color="white"
            width="115px"
            className="mt-0 mb-4"
            style={{
              margin: "auto",
              height: "2px",
              backgroundColor: "darkcyan",
            }}
          />

          <p className="lead text-muted mx-auto w-responsive mb-3 blog_des">
            In today’s digital age, every touch point, impression, and branded
            interaction contribute an inspiring user experience. At Royal Cyber,
            we help you navigate the complexity of designing and improving your
            user experience. With our complete line UX services and our zero
            investment UX audit, we’ll help you design a UX strategy that best
            fits your business goals and improve your UI productivity.
          </p>

          <div className="row mt-3">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="view overlay rounded z-depth-2 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                  alt="Sample image"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <h4 className="font-weight-bold mb-3 white-text">
                <strong>How to design footer</strong>
              </h4>

              <p className="grey-text blog_desc">
                by <a className="font-weight-bold">Sami Ullah</a>, 15/07/2020
              </p>

              <p className="grey-text blog_desc">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus
                voluptas.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="view overlay rounded z-depth-2 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  alt="Sample image"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <h4 className="font-weight-bold mb-3 white-text">
                <strong>Starting your travelling</strong>
              </h4>

              <p className="grey-text blog_desc">
                by <a className="font-weight-bold blog_desc">Sami</a>, 13/07/2018
              </p>

              <p className="grey-text blog_desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis voluptatum deleniti atque corrupti quos dolores.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="view overlay rounded z-depth-2 mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                  alt="Sample image"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <h4 className="font-weight-bold white-text mb-3">
                <strong>How to write content</strong>
              </h4>

              <p className="grey-text blog_desc">
                by <a className="font-weight-bold">Sami Ullah</a>, 11/07/2018
              </p>

              <p className="grey-text blog_desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blogs;
