import React, { Component } from 'react';
import TopStories from "./TopStories";
import OtherStories from "./OtherStories";
import Nav from "../Nav"
import "../styles.css"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    id:1,
                    image:"https://cdn.pixabay.com/photo/2020/06/29/19/26/piano-5353974__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:2,
                    image:"https://cdn.pixabay.com/photo/2020/07/09/09/05/cat-5386372_1280.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:3,
                    image:"https://cdn.pixabay.com/photo/2020/07/05/19/28/bloom-5374310__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:4,
                    image:"https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:5,
                    image:"https://cdn.pixabay.com/photo/2020/07/04/09/47/theater-5368958__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:6,
                    image:"https://cdn.pixabay.com/photo/2020/07/02/08/00/panoramic-5362158__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:7,
                    image:"https://cdn.pixabay.com/photo/2020/06/24/17/24/ruin-5337039__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:8,
                    image:"https://cdn.pixabay.com/photo/2020/05/28/15/15/smartphone-5231499__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:9,
                    image:"https://cdn.pixabay.com/photo/2020/07/05/05/53/bridge-5371794__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                },
                {
                    id:10,
                    image:"https://cdn.pixabay.com/photo/2020/07/07/10/22/melbourne-5380024__340.jpg",
                    heading:"sahjs sacnjksnca ajsnckancs acnas",
                    author:"Satyansh Singh",
                    created: "13th July 2020",
                    text:"reiciendis quae deleniti doloremque. Totam placeat quo aliquam, voluptatem illum iure dolores fugiat, itaque deleniti voluptates eaque! Numquam?"
                }
            ]
        }
    }

    render() {
        let top = this.state.data.slice(0,4);
        let other = this.state.data.slice(4);
        var stories = [];
        stories.push(<Nav/>);
        if(this.state.data.length <= 4){
            stories.push(
                <div id="main-body-container" className="d-flex flex-column align-items-center">
                    <TopStories data={top}/>
                </div>
            );
        }
        else{
            stories.push(
                <div id="main-body-container" className="d-flex flex-column align-items-center">
                    <TopStories data={top}/>
                    <h1 className="text-center mt-5 pt-2 text-danger"><strong>OTHER STORIES</strong></h1>
                    <OtherStories data={other}/>
                </div>
            );
        }
        return (
            <React.Fragment>
                {/* <Nav/>
                <div id="main-body-container" className="d-flex flex-column align-items-center">
                    <TopStories data={top}/>
                    <h1 className="text-center mt-5 pt-2 text-danger"><strong>OTHER STORIES</strong></h1>
                    <OtherStories data={other}/>
                </div> */}
                {stories}
            </React.Fragment>       
         );
    }
}
 
export default Main;