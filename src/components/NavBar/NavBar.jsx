import React from 'react'
import './NavBar.scss'

function NavBar() {
    return (
        <>
            <nav className="navigation__bar">
                <div className="navigation__bar--logo">
                    <img src="./public/logo.png" alt="Logo My Work Team"width="50px" height="50px"/>
                    <h1>My Work Team</h1>
                </div>
                <ul className="navigation__bar--items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
