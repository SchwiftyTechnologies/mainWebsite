import React, { Component } from 'react';
import Deco from"./deco"

class Work extends Component {
    render() { 
        return ( 
            <div id="work-container">
                <div id="work-deco1">
                    <Deco color="#f2f2f2"/>
                </div>
                <h2 className="work-main-text mt-5">Want to go online, We are here for you</h2>
                <hr/>
                <div className="row w-100 d-flex justify-content-center mx-0">
                    <div className="mx-lg-2 mx-0 col-xl-3 col-lg-4 col-12 d-flex justify-content-center">
                        <div className="work-card">
                            <img alt="Not Found" className="work-card-image" src="https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272__340.jpg"></img>
                            <h3>Website Design</h3>
                            <p>Simple, Elegant and User-friendly Designs for your website.</p>
                        </div>
                    </div>
                    <div className="mx-lg-2 mx-0 col-xl-3 col-lg-4 col-12 d-flex justify-content-center">
                        <div className="work-card">
                            <img alt="Not Found" className="work-card-image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                            <h3>Website Development</h3>
                            <p>Interactive,Dynamic and Responsive Websites</p>
                        </div>
                    </div>
                    <div className="mx-lg-2 mx-0 col-xl-3 col-lg-4 col-12 d-flex justify-content-center">
                        <div className="work-card">
                            <img alt="Not Found" className="work-card-image" src="https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090__340.jpg"></img>
                            <h3>Hosting on online services</h3>
                            <p>Real-time hosting using online servers like AWS and microsoft Azure</p>
                        </div>
                    </div>
                </div>
                <div id="work-deco2">
                    <Deco color="#f2f2f2"/>
                </div>
            </div>
         );
    }
}
 
export default Work;