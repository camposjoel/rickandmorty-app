import React from 'react';
import './styles/Navbar.css';
import '../index.css'
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <>
        <nav className="navbar is-light centrar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item main-title" to="/">
                    Rick And Morty App
                </Link>
            </div>
        </nav>
        {props.children}
        </>
    );
}

export default NavBar;