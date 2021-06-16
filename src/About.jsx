import React from "react";
import { NavLink } from "react-router-dom";
import temp_img from "../src/images/home_img.svg";
import Comp from "./Comp";

const About = () => {
    return(
        <>
            <Comp head="Welcome TO About Page" head2="We Are the Team Of Talented Developers!" img={temp_img} btn="Contact Now" visit="/Contact"/>
        </>
    );
};

export default About;