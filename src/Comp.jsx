import React from "react";
import { NavLink } from "react-router-dom";
import home_img from "../src/images/about_img.svg";

const Comp = (props) => {
    return(
        <>
            <section id="header" className="d-flex align-items-center mt-lg-5">
                <div className="container-fluid ">
                    <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> 
                                 {props.head} <strong style={{color:"lightcoral"}}>Thapatechnical</strong>
                            </h1>
                            <h2 className="my-3">
                                {props.head2}
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit}><button type="button" style={{borderRadius:"18rem"}} className="btn btn-outline-primary">{props.btn}</button></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 rotate">
                            <img src={props.img} className="img-fluid" alt="IMAGE..."/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comp;