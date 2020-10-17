import React, { Component } from "react"
import {Route, NavLink, HasRouter, HashRouter} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 className="title">Warai SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <div class="content">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contact" component={Contact}/>
                        </div>
                    </ul>
                </div>
            </HashRouter>
        )
    }
}

export default Main