import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/logo.png'
import './Header.css';



const Header = () => {
    return (
        <div className="header">
            <div className="logo" >
                <img src={Logo} alt="" />
            </div>
            <nav>
                <a href="/#" className="nav-icon">
                    <FaBars  />
                </a>
                <a href="/shop" className="nav-item">Shop</a>
                <a href="/order-review" className="nav-item">Order Review</a>
                <a href="/manage-inventory" className="nav-item">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;