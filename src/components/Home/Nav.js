import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className ="navbar navbar-expand-lg">
                <a href="/">
                    <img alt="Not Found" src={require('../../assets/Logo-1.png')} className="ml-lg-0 ml-3" height="40" width="40"></img>
                    <span className="navbar-brand ml-2">Shwifty Tech</span>
                </a>
                <button className ="navbar-toggler" type ="button" data-toggle ="collapse" data-target ="#colNav">
                    <span className="home-toggle-icon"></span>
                    <span className="home-toggle-icon"></span>
                    <span className="home-toggle-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id ="colNav">
                    <ul className ="navbar-nav">
                        <li className="nav-item">
                            <a href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav ml-auto">
                        <li className="nav-item mt-lg-3 pt-lg-1">
                            <a href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <form>
                                <input type="email" placeholder="Email"/>
                                <button className="home-nav-solid-button d-inline">Sign Up</button>
                            </form>
                        </li>
                    </ul> */}
                </div>
            </nav>
         );
    }
}
 
export default Nav;