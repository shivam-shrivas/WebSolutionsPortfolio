import React from "react";
//import { NavLink } from "react-router-dom";
import home_img from "../src/images/about_img.svg";
import Comp from "./Comp";

const Home = () => {
    return(
        <>
            <Comp head="Grow Your Business with" head2="We Are the Team Of Talented Developers!" img={home_img} btn="Get Started" visit="/Service"/>
        </>
    );
};

export default Home;