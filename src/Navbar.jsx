import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <NavLink className="navbar-brand text-info font-weight-bolder" to="/">
        <img src={"https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"} alt="Logo" 
        width="36" height="36" className="vertical-align-middle" />
        <span className=""></span>
      </NavLink>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" 
      aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
      onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

    <div className="">
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <NavLink className="nav-link text-info" exact to="/">Home</NavLink>
        <NavLink className="nav-link text-info" exact to="/About">About</NavLink>
        <NavLink className="nav-link text-info" exact to="/Service">Service</NavLink>
        <NavLink className="nav-link text-info" exact to="/Contact">Contact</NavLink>
      </div>
    </div>
    </nav>
    </div>
    </div>
    </div>
  );
}

export default Navbar;