import React, { Component } from 'react';
import Nav from "../Nav"

class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                id:1,
                date:"3 November 2020",
                image:"https://cdn.pixabay.com/photo/2020/07/08/07/19/hover-fly-5382916_1280.jpg",
                heading:"Modern loneliness: Musician Lauv wants to help you find peace of mind in a difficult time",
                text:`<h1>Introduction</h1><p><strong>Lorem ipsum</strong> dolor <i>sit amet consectetur</i> adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</p><img src=\"https://cdn.pixabay.com/photo/2020/07/07/10/22/melbourne-5380024__340.jpg\"/><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</div><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</p><h1>Heading</h1><p><strong>Lorem ipsum</strong> dolor <i>sit amet consectetur</i> adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</p><img src=\"https://cdn.pixabay.com/photo/2020/07/07/10/22/melbourne-5380024__340.jpg\"/><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</div><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis corporis unde culpa, repellat velit hic deleniti molestiae laboriosam esse alias aliquid libero ipsam quaerat eum cupiditate ad natus illo.</p>`
            }
        }
    }
    componentDidMount(){
        var content = document.getElementById("blog-view-content");
        content.innerHTML = this.state.data.text;
    }
    render() { 
        return (
            <React.Fragment>
                <Nav/>
                <div className="d-flex flex-column align-items-center">
                    <div id="blog-image-container" className="d-flex flex-column justify-content-end" style={{backgroundImage:`url(${this.state.data.image})`}}>
                        <div id="blog-view-heading">{this.state.data.heading}</div>
                    </div>
                    <div id="blog-view-content" className="container py-4 px-4 px-sm-1 d-flex flex-column"></div>
                </div>
            </React.Fragment>
         );
    }
}
export default View;