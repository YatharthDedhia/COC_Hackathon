import React, { useState, useEffect } from 'react';

import './css/dashboard.css';
import './css/copylink.css';
import './css/commoninput.css';
import './css/search.css'
import './css/table.css'
import './css/sidebar.css'
import './css/calendar.css'


const NavLinks = () => (
    <React.Fragment>
        <p>
            <div>
                <form action="" autocomplete="on">
                    <input className="Search1" type="text" id='search' name='search' placeholder="Search" />
                    <input id="search_submit" value="Rechercher" type="submit" />
                </form>
            </div>
        </p>
        <p>
            <a href="/profile">Profile</a>
        </p>
    </React.Fragment>
);

const Sidebar = () => {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Announcements</li></a>
                    <a href="#"><li>Timetable</li></a>
                    <a href="#"><li>Test Schedule</li></a>
                    <a href="#"><li>Homework</li></a>
                </ul>
            </div>
        </nav>
    );
};

const Navbar = () => {
    return (
        <div className="landing-navbar">
            {/* m */}
            <Sidebar />
            {/* m */}
            <div className="landing-navbar-logo">
                <h1>Test Platform</h1>
            </div>
            <div className="landing-navbar-links">
                <NavLinks />
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
        </React.Fragment>
    );
};

export default Home;