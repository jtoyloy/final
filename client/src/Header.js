import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="overlay">
                <h1>Link Tracker Application</h1>
                <p>This is my homework about CRUD action through Express, ReactJS and Postgres SQL</p>
            </div>
        </header>
    );
}

export default Header;