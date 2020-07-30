import React, { Component } from 'react';

class Top3 extends Component {
    render() { 
        var stories = [];
        // code to remove HTML tags in text
        var arr = [];
        for(let i = 1 ; i < this.props.data.length ; i++){
            let str = this.props.data[i].text;
            let s = "";
            let count = 0;
            let j = 0;
            let c;
            while(count < 120){
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
            arr.push(s);
        }
        // end
        for(let i = 1 ; i < this.props.data.length ; i++){
            stories.push(
                <a href={`/blog/${i+1}`} class="story-link px-0 mx-0">
                    <div className="row right-story-container">
                        {/* src={require(`${this.props.data[i].image}`) */}
                        <div className="col-xl-6 col-md-5 col-12 m-0 top3-stories-image" style={{backgroundImage:`url(${this.props.data[i].image})`}}>
                        {/* <div className="col-xl-6 col-md-5 col-12 mx-0 my-0 px-0 d-flex align-items-center"> */}
                            {/* <img alt="not found" src={this.props.data[i].image} className="m-0 w-100"/> */}
                        </div>
                        <div className="col-xl-6 col-md-7 col-12 d-flex flex-column justify-content-center px-3">
                            <h3 className="mt-3 story-heading">{this.props.data[i].heading.slice(0,50)}..</h3>
                            <p className="story-info"><i>{this.props.data[i].author} : {this.props.data[i].created}</i></p>
                            <p>{arr[i-1]}...</p>
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