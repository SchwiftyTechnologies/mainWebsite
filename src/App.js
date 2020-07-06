import React, { Component } from 'react';
import "./components/bootstrap.min.css"
import "./components/styles.css"
import Home from "./components/Home"
import Work from "./components/Work"
import Product from "./components/product"
import Features from "./components/features"
import Feedback from "./components/feedback"
import Tech from "./components/tech"
import Footer from "./components/footer"

class App extends Component {
    render() {
        return(
            <div className="d-flex flex-column">
                {/* <a id="scroll-to-top" href="#" className="float-right"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a> */}
                <Home/>
                <Work/>
                <Product/>
                <Features/>
                <Feedback/>
                <Tech/>
                <Footer/>
            </div>
        );
    }
}
export default App;