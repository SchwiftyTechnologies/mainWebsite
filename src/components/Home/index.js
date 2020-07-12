import React, { Component } from 'react';
import "./styles.css"
import Home from "./Home"
import Work from "./Work"
import Product from "./product"
import Features from "./features"
import Feedback from "./feedback"
import Tech from "./tech"
import Footer from "./footer"

class Main extends Component {
    render() { 
        return (
            <React.Fragment>
                <Home/>
                <Work/>
                <Product/>
                <Features/>
                <Feedback/>
                <Tech/>
                <Footer/>
            </React.Fragment>
         );
    }
}
export default Main;