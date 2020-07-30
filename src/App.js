import React, { Component } from 'react';
import {Route, BrowserRouter} from "react-router-dom"
import "./components/bootstrap.min.css"
import Home from "./components/Home";
import Blog from "./components/Blog/Main";
import New from "./components/Blog/New";
import View from './components/Blog/View/art1';
import View2 from "./components/Blog/View/art2";
import View3 from './components/Blog/View/art3';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="d-flex flex-column">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/blog/new" component={New}/>
                    <Route exact path="/blog/1" component={View}/>
                    <Route exact path="/blog/2" component={View2}/>
                    <Route exact path="/blog/3" component={View3}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;