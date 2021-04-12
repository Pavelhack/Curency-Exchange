import React from "react";
import { NavLink }  from "react-router-dom";

export const Header = () =>{
    return(
        <nav className="navbar">
        <h1>Online info</h1>
        <div className="links">
        <NavLink to="/" exact>Info</NavLink>
        <NavLink to="/InfoRate" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>currency exchange</NavLink>
        </div>
      </nav>
    );
}
