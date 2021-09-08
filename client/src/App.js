import React, {Component} from 'react';
import {BrowserRouter, Route, Router} from "react-router-dom";
import EditPost from "./components/EditPost";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <NavBar/>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/add" exact component={CreatePost}></Route>
                    <Route path="/edit/:id" exact component={EditPost}></Route>
                    <Route path="/post/:id" exact component={PostDetails}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;