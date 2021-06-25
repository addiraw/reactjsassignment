import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="title">
                    Search Photos
                    <div className="search-box">
                        <input type="search" name="search" id="search" />
                    
                    </div>
                
                </div>
            </nav>
        </div>
    )
}
