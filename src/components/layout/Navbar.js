import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">RABOO</Link>
                <ul className="right">
                    <li><NavLink to='/' className="btn btn-floating blue lighten-1">Chat</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar