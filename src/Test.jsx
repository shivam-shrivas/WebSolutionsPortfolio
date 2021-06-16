import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Test = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a class="navbar-brand text-info font-weight-bolder" href="/">
        <img src={"https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"} alt="Logo" 
        width="36" height="36" className="vertical-align-middle" />
        <span className=""></span>
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" 
      aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
      onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <NavLink className="nav-link text-info" to="/contact">Support</NavLink>
        <NavLink className="nav-link text-info" to="/login">Login</NavLink>
        <NavLink to="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</NavLink>
      </div>
    </nav>
  );
}

export default Test;