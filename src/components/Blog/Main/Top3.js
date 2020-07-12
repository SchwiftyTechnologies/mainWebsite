import React, { Component } from 'react';

class Top3 extends Component {
    render() { 
        var stories = [];
        for(let i = 1 ; i < this.props.data.length ; i++){
            stories.push(
                <a href="/blog/1" class="story-link px-0 mx-0">
                <div className="row right-story-container">
                    <img alt="not found" src={this.props.data[i].image} className="col-xl-6 col-md-5 col-12 mx-0 my-0 px-0"/>
                    <div className="col-xl-6 col-md-7 col-12 d-flex flex-column justify-content-center px-3">
                        <h3 className="mt-3 story-heading">{this.props.data[i].heading}</h3>
                        <p className="story-info"><i>{this.props.data[i].author} : {this.props.data[i].created}</i></p>
                        <p>{this.props.data[i].text.slice(0,90)}...</p>
                    </div>
                </div>
                </a>
            )
        }
        return ( 
            <div className="d-flex flex-column py-2">
                {stories}
            </div>
         );
    }
}
 
export default Top3;