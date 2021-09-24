import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css';



const Header = () => {
    return (
        <div className="header">
            <div className="logo" >
                <img src={Logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;