import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import Logo from '../../images/logo.svg'
import './Header.css';



const Header = () => {
    const [burgerItem, setBurgerItem] = useState(false);

    const handleClick = () => {
        setBurgerItem(!burgerItem)
    }

    return (
        <div className="header">
            <div className="logo" >
                <img src={Logo} alt="" />
            </div>
            <nav>
                <a href="/#" className="nav-icon" onClick={handleClick}>
                    <FaBars />
                </a>
                <a href="/#" className="nav-item">Shop</a>
                <a href="/#" className="nav-item">Order Review</a>
                <a href="/#" className="nav-item">Manage Inventory</a>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <a href="/#" className="">Shop</a>
                <a href="/#" className="">Order Review</a>
                <a href="/#" className="">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;