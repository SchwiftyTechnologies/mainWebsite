import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div id="product-container">
        <div
          id="product-triangle1"
          className="d-flex align-items-center justify-content-lg-center pl-3 pl-lg-0"
        >
          <div>Top Features</div>
        </div>
        <div className="product-card-container row">
          <div className="mx-lg-2 mx-0 col-lg-5 col-xl-3 col-12 d-flex justify-content-center">
            <div className="product-card">
              <div className="product-card-1"></div>
              <div className="product-card-2"></div>
              <h3 style={{ fontFamily: "Work Sans" }}>A - Z Solutions</h3>
              <p style={{ fontFamily: "Work Sans", fontSize: "15px" }}>
                We provide you with a comprehensive solution starting from
                design to development to hosting and finally maintenance. We
                will walk you through every process and provide you the best
                solutions at each step of the way.
              </p>
            </div>
          </div>
          <div className="mx-lg-2 mx-0 col-lg-5 col-xl-3 col-12 d-flex justify-content-center">
            <div className="product-card">
              <div className="product-card-1"></div>
              <div className="product-card-2"></div>
              <h3 style={{ fontFamily: "Work Sans" }}>Modern Frameworks</h3>
              <p style={{ fontFamily: "Work Sans", fontSize: "15px" }}>
                We use state of the art frameworks for all our projects to
                provide a modern and sustainable online presence.
              </p>
            </div>
          </div>

          <div className="mx-lg-2 mx-0 col-lg-5 col-xl-3 col-12 d-flex justify-content-center">
            <div className="product-card">
              <div className="product-card-1"></div>
              <div className="product-card-2"></div>
              <h3 style={{ fontFamily: "Work Sans" }}>24x7 Services</h3>
              <p style={{ fontFamily: "Work Sans", fontSize: "15px" }}>
                We are always available to provide instant assistance so you can
                minimize your downtime.
              </p>
            </div>
          </div>
        </div>
        <div
          id="product-triangle2"
          className="d-flex align-items-center justify-content-lg-center pl-3 pl-lg-0"
        />
      </div>
    );
  }
}

export default Product;
