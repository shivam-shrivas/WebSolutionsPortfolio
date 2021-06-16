import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Fotter from "./Fotter";

const App = () => {
    return(
        <>
        <Navbar/>       
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>           
            <Route exact path="/Service" component={Service}/>
            <Route exact path="/Contact" component={Contact}/>
            <Redirect to="/" />
        </Switch>
        <Fotter/>        
        </>
    );
};

export default App;