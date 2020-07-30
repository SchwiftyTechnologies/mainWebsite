import React, { Component } from 'react';
import Top3 from "./Top3"

class topStories extends Component {
    render() {
        // code to remove HTML tags in text
        let str = this.props.data[0].text;
        let s = "";
        let count = 0;
        let j = 0;
        let c;
        while(count < 140){
            c = str.charAt(j);
            if(c !== '<'){
                s = s + c ;
                count++;
                j++;
            }
            else{
                j++;
                while(str.charAt(j) !== '>')    j++;
                j++;
            }
        }
        // end

        var stories = [];
        if(this.props.data.length > 1){
            stories.push(
                <div className="row m-0 p-0 pt-5" id="top-stories">
                    <div className="col-xl-7 col-lg-6 col-12 px-0 top-story d-flex flex-column justify-content-end" style={{backgroundImage:`url(${this.props.data[0].image})`}}>
                        <div id="top-story-image-text">
                            <a href="/blog/1" className="story-link">
                                <h1 className="text-light mt-2 mt-lg-3 top-story-h1">{this.props.data[0].heading.slice(0,50)}..</h1>
                                <p id="top-story-info" className="text-light"><i>{this.props.data[0].author} : {this.props.data[0].created}</i></p>
                                <p id="top-story-image-para" className="mb-2 mb-lg-4">{s} ..</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-12 px-0 mx-0">
                        <Top3 data={this.props.data}/>
                    </div>
                </div>
            );
        }
        else{
            stories.push(
                <div className="row m-0 p-0 pt-5" id="top-stories">
                    <div className="col-12 px-0 top-story-single d-flex flex-column justify-content-end" style={{backgroundImage:`url(${this.props.data[0].image})`}}>
                        <div id="top-story-image-text">
                            <a href="/blog/A-Transition-From-Intel-To-Apple" className="story-link">
                                <h1 className="text-light mt-2 mt-lg-3 top-story-h1">{this.props.data[0].heading.slice(0,50)}..</h1>
                                <p id="top-story-info" className="text-light"><i>{this.props.data[0].author} : {this.props.data[0].created}</i></p>
                                <p id="top-story-image-para" className="mb-2 mb-lg-4">{s}...</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 px-0 mx-0">
                        <Top3 data={this.props.data}/>
                    </div>
                </div>
            );
        }
        return ( 
            stories
         );
    }
}
 
export default topStories;