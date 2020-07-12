import React, { Component } from 'react';
import Nav from "../Nav"

class New extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Nav/>
                {/* <div id="nav-expand-cover" className="nav-cover-closed"/> */}
                <div id="new-blog-container">
                    <form id="new-blog-form" action="/blog/new" method="POST">
                        <div>
                            <label>Heading</label>
                            <input type="text" name="heading"/>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="text" name="image"/>
                        </div>
                        <div>
                            <label>Content</label>
                            <textarea name="text" rows="15"/>
                        </div>
                        <div><button>Save</button></div>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default New;