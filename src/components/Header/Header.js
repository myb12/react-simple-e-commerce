import React, { useState } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import Logo from '../../images/logo.svg'
import './Header.css';



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
                    <a href="/#" className="nav-item">Shop</a>
                    <a href="/#" className="nav-item">Order Review</a>
                    <a href="/#" className="nav-item">Manage Inventory</a>
                </div>
                <div className="logo" >
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <FaWindowClose className="icon-close" onClick={handleClick} />
                <a href="/#" >Shop</a>
                <a href="/#" >Order Review</a>
                <a href="/#" >Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;