import React, { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import './Header.css';

const activeStyle = {
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold'
};


const Header = () => {
    const [burgerItem, setBurgerItem] = useState(false);

    const handleClick = () => {
        setBurgerItem(!burgerItem);
    }

    return (
        <div className="header">

            <nav>
                <div>
                    <a href="/#" className="nav-icon" onClick={handleClick}>
                        <FaBars />
                    </a>
                    <NavLink activeStyle={activeStyle} to="/shop" className="nav-item">Shop</NavLink>
                    <NavLink activeStyle={activeStyle} to="/order-review" className="nav-item">Order Review</NavLink>
                    <NavLink activeStyle={activeStyle} to="/inventory-management" className="nav-item">Manage Inventory</NavLink>
                    <NavLink activeStyle={activeStyle} to="/login" className="nav-item">Login</NavLink>
                </div>
                <div className="logo" >
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <FaWindowClose className="icon-close" onClick={handleClick} />
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order-review">Order Review</NavLink>
                <NavLink to="/inventory-management">Manage Inventory</NavLink>
            </div>
        </div>
    );
};

export default Header;