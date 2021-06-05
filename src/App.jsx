import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch,Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from './Footer';

const App =() => {

    return (
        <>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Services" component={Services}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to = "/"></Redirect>
           </Switch>
           <Footer/>
        </>
    );
};

export default App;