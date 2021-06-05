import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/img3.svg";
import Common from "./Common";
const About =() => {

    return (
        <>
           <Common name= 'Welcome to About page' imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );
};

export default About;