import React, { Component } from 'react';

class nav extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
        this.navButton = this.navButton.bind(this);
    }

    navButton(){
        var cover = document.getElementById("nav-expand-cover");
        if(this.state.visible){
            this.setState({visible: false});
            cover.classList.add("nav-cover-expand");
            cover.classList.remove("nav-cover-closed");
        }
        else{
            this.setState({visible: true});
            cover.classList.add("nav-cover-closed");
            cover.classList.remove("nav-cover-expand");
        }
    }

    render(){
        return (
            <div id="nav-container" className="px-md-5 px-3">
                <div>
                    <a href="/" className="nav-button">Schwifty Technologies</a>
                    <a href="/blog" className="nav-button">Blogs</a>
                    {/* <a href="/blog/new" className="nav-button">New Blog</a> */}
                </div>
                {/* <div className="h-100 d-flex flex-column justify-content-center" onClick={this.navButton}>
                    <div className="stack-bar"></div>
                    <div className="stack-bar"></div>
                    <div className="stack-bar"></div>
                </div> */}
            </div>
        );
    }
}

export default nav;