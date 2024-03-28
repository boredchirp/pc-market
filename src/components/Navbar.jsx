import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // Get the cart state from Redux store
    const state = useSelector(state => state.handleCart);

    return (
        // Navigation bar
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
            <div className="container">
                {/* Brand logo */}
                <span className="navbar-brand fw-bold fs-4 px-2">PC Market</span>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" style={{ fontSize: '1.2em' }}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={{ fontSize: '1.2em' }}>About Us</NavLink>
                        </li>
                    </ul>

                    <div className="buttons text-center">
                        /* Cart button */
                        <NavLink to="/cart" className="btn btn-outline-light m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

