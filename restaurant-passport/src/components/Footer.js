import React from "react";
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <nav>
                <NavLink to='https://restaurant-passport-team.netlify.com/index.html'>About</NavLink>
                <NavLink to='https://restaurant-passport-team.netlify.com/about.html'>About Us</NavLink>
                <NavLink to=''>My Passport</NavLink>
            </nav>
            <p>Restaurant Passport copyright The Restaurant Passport Team</p>
       </div>
    );
}
