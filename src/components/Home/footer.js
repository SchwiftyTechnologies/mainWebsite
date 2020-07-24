import React, { useRef } from "react";

const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-details" className="row justify-content-center">
        <div id="foot-card-1" className="footer-card col-12 col-xl-5">
          <h1 className="text-center">About Us</h1>
          <p className="text-center text-md-center">
            Schwifty Technologies is an information technology start-up based in
            Bangalore aimed at providing state of the art technology solutions
            to companies and individuals across the world.
          </p>
        </div>

        <div className="footer-hr" />
        <div id="foot-card-3" className="footer-card col-12 col-xl-5">
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center text-md-center">
            Do you have a business idea that needs to be propelled to greater
            heights? Feel free to contact us at anytime and we can make that
            happen for you!
            <br />
            Email : tech.schwifty@gmail.com <br /> Phone : +91 9113294940
          </p>
        </div>
      </div>
      <div id="copyright-stamp">
        <i className="fa fa-copyright mr-1" aria-hidden="true"></i>Schwifty
        Technologies 2020
      </div>
      <div id="footer-decoration-1"></div>
      <div id="footer-decoration-2"></div>
    </div>
  );
};

export default Footer;
