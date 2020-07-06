import React, { Component } from 'react';
import Nav from "./Nav";

class Home extends Component {
  render() { 
    return ( 
      <div id="home-container">
        <Nav/>
        <div id="home-main-container" className="row d-flex justify-content-center">
        <div className="col-xl-5 col-11 home-row-col">
        <div id="home-main-text" className="pl-lg-5 pl-1 text-center text-md-left">Connecting your business<br/>with the web.</div>
        <div id="home-hr" className="pl-2 pl-lg-5 mx-auto mx-md-5"/>
        <div id="home-text" className="px-lg-5 px-3 text-center text-md-left">
            Go online and give yourself a medium to showcase your talent, give your business legitimacy and an another marketing channel or a medium to showcase your talent.
            <br/>Keep your customers informed and also enable yourself to target a wider audience. 
        </div>
        </div>
        <div className="col-xl-6 col-11 home-row-col">
        <img alt="Not Found" src="https://cdn.pixabay.com/photo/2018/02/16/11/05/trace-3157431__340.jpg" width="100%" height="100%"/>
        </div>
    </div>
      </div>
      );
    }
  }
export default Home;