import React, { Component } from "react";

class Tech extends Component {
  render() {
    return (
      <div id="tech-container">
        <h1>Technologies</h1>
        <div className="d-flex">
          <div id="tech-hr"></div>
          <img
            alt="Not Found"
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/nolan/512/react-native.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/color/480/000000/javascript.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/color/480/000000/nodejs.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/color/480/000000/angularjs.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/color/480/000000/mongodb.png"
            className="moving-images"
          ></img>
          <img
            alt="Not Found"
            src="https://img.icons8.com/color/480/000000/python.png"
            className="moving-images"
          ></img>
        </div>
      </div>
    );
  }
}

export default Tech;
