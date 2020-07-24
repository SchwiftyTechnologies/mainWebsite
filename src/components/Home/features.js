import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div id="features-container">
        <h1>Features</h1>
        <div className="feature-hr pl-2 pl-lg-5" />
        <p id="feature-para">
          Empower your business with all the right tools to create an online
          platform and provide the best customer experience
        </p>

        <div className="row d-flex justify-content-center mx-4 mx-lg-0 mt-5">
          <div className="col-lg-2 col-md-3 col-12 col-sm-6 text-center text-md-center">
            <h3 className="text-white my-md-4 my-3">Website Design</h3>
            <p className="text-secondary px-4 px-md-0 pr-3 pb-4 pb-lg-1">
              We give you an elegant and eye-catching look to your website.
              Using frameworks and tools like Bootstrap,CSS, Javascript, HTML
              and React we give your website a user-friendly design.
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-12 col-sm-6 text-center text-md-center">
            <h3 className="text-white my-md-4 my-3">Website Development</h3>
            <p className="text-secondary px-4 px-md-0 pr-3 pb-4 pb-lg-1">
              Get yourself an interactive and dynamic website. Working with
              tools,frameworks and databases like Node.js, React and MongoDB we
              give you a responsive and user-friendly website.
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-12 col-sm-6 text-center text-md-center">
            <h3 className="text-white my-md-4 my-3">
              Hosting Services
            </h3>
            <p className="text-secondary px-4 px-md-0 pr-3 pb-4 pb-lg-1">
              Host your websites on a server and see your business flourish.
              Using online servies like AWS and Microsoft Azure we help you
              integarte and host your website online giving you an online
              presence.
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-12 col-sm-6 text-center text-md-center">
            <h3 className="text-white my-md-4 my-3">Simple Pricing</h3>
            <p className="text-secondary px-4 px-md-0 pr-3 pb-4 pb-lg-1">
              We provide simple pricing solutions for a variety of people and
              companies. We range anywhere from monthly packages to project
              based pricing. We tailor make the pricing according to your needs
              and provide you the most affordable price in the market.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
