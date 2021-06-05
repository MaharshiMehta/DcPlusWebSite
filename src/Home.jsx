import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/img1.svg";
import Common from "./Common";
const Home =() => {

    return (
        <>
          <Common name= 'Grow Your Education With' imgsrc={web} visit="/services" btname="Get Started"/>
        </>
    );
};

export default Home;