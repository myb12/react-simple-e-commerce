import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
            <div className="search-container">
                <input type="text" placeholder="Type here to search" />
                <div>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;