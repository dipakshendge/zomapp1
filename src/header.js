import React from "react";
import "./header.css";
import{Link} from "react-router-dom"
const Header =() =>{
    return(
        <header>
            <div id="brand">
                <span>Developer Dip's</span>&nbsp; &nbsp;
                <Link to="/" className="btn btn-success">Home</Link>
            </div>
            <div id="login">
                <Link to="/" className="btn btn-primary">Login</Link>&nbsp; &nbsp;
                <Link to="/" className="btn btn-info">Sign UP</Link>
            </div>
        </header>
    )
};



export default Header;