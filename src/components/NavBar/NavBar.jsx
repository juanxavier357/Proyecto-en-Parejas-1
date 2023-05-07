import React from 'react'
import './NavBar.scss'

function NavBar() {

    return (
        <>
            <nav className="navigation__bar">
                <div className="navigation__bar--logo">
                    <img src="/logo.png" alt="Logo My Work Team" width="30px" height="30px" />
                    <h1>My Work Team</h1>
                </div>
                <ul className="navigation__bar--items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <button className="navigation__bar--menu"><img src="/menu.png" alt="Menu" width="40px" height="40px" /></button>
            </nav>
        </>
    );
}

export default NavBar;
