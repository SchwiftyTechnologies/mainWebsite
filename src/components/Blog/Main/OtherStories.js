import React, { Component } from 'react';

// class OtherStories extends Component {
//     render() {
//         let stories = [];
//         for(let i = 0 ; i < this.props.data.length ; i++){
//             stories.push(
//                     <a href="/" class="other-story-link col-11 col-md-5 col-lg-3 d-flex flex-column container-border m-2 p-0">
//                         <div className="w-100">
//                             <img alt="not found" src={this.props.data[i].image} className="w-100 h-auto"/>
//                             <h3 className="mt-2 mx-3 story-heading">{this.props.data[i].heading}</h3>
//                             <p className="mx-3">{this.props.data[i].text.slice(0,100)} ...</p>
//                         </div>
//                     </a>
//             )
//         }
//         return ( 
//             <div className="row w-100 mt-2 mx-0 px-0 align-items-center d-flex justify-content-center">
//                 {stories}
//             </div>
//          );
//     }
// }

// export default OtherStories;
 
class OtherStories extends Component {
    render() {
        let stories = [];
        for(let i = 0 ; i < this.props.data.length ; i++){
            stories.push(
                <div className="col-11 col-md-5 col-lg-3 d-flex flex-column container-border m-2 p-0">
                    <a href="/blog/1" className="other-story-link">
                    <img alt="not found" src={this.props.data[i].image} className="w-100 h-auto"/>
                    <h3 className="mt-4 mx-4 story-heading">{this.props.data[i].heading}</h3>
                    <p className="story-info px-4"><i>{this.props.data[i].author} : {this.props.data[i].created}</i></p>
                    <p className="mx-4">{this.props.data[i].text.slice(0,100)} ...</p>
                    </a>
                </div>
            )
        }
        return ( 
            <div className="row w-100 mt-2 mx-0 px-0 align-items-center d-flex justify-content-center">
                {stories}
            </div>
         );
    }
}

export default OtherStories;
 