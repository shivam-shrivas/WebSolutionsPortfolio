import React, { useState } from "react";

const Contact = () => {
    const [detail,setDetail] = new useState(
        {
            name:"",
            phone:"",
            email:"",
            mssg:""
        }
    );

    const InputEvent = (event) => {
        const val = event.target.value;
        const name = event.target.name;
        setDetail((prevalue) =>{
            return{
                ...prevalue,
                [name] : val,
            };
        });
        
    };

    const onSubmits = (e) => {
            e.preventDefault();
            alert(`Name = ${detail.name} , Phone Nunber = ${detail.phone} , Email Address = ${detail.email} , Message = ${detail.mssg}`);
    };

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={onSubmits}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" onChange={InputEvent} name="name" value={detail.name} id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" onChange={InputEvent} name="phone" value={detail.phone} id="exampleFormControlInput1" placeholder="Mobile Number"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" onChange={InputEvent} name="email" value={detail.email} id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" onChange={InputEvent} name="mssg" value={detail.mssg} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button type="Submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                </div>
            </div>
            </div>
            

        </>
    );
};

export default Contact;