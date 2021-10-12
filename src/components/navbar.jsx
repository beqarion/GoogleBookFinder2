import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import '../css/navbar.css'


const Navbar = () => {
    return (
        <div className="topnav">
            <div id="topnav-cont">
                <a href="/" id="logo"><img src={logo} alt="logo" /></a>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>

            </div>

        </div>
    )
}

export default Navbar