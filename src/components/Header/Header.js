import React, { useState, } from 'react';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/logo.svg'
import './Header.css';

const activeStyle = {
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold'
};


const Header = () => {
    const [burgerItem, setBurgerItem] = useState(false);
    const location = useLocation();
    const { user, logOut } = useAuth();

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

                    {
                        location.pathname === '/' ? <NavLink activeStyle={activeStyle} to="/" className="nav-item">Shop</NavLink>
                            :
                            <NavLink activeStyle={activeStyle} to="/shop" className="nav-item">Shop</NavLink>
                    }
                    <NavLink activeStyle={activeStyle} to="/order-review" className="nav-item">
                        Order Review
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/inventory-management" className="nav-item">
                        Manage Inventory
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/register" className="nav-item">
                        Register
                    </NavLink>

                    {
                        user.email ? <span className="log-out" onClick={logOut} >Log out</span> :
                            <NavLink activeStyle={activeStyle} to="/login" className="nav-item">
                                Login
                            </NavLink>
                    }

                </div>
                <div className="logo" >
                    <span style={{ color: "#fff", marginRight: '10px' }}>{user.displayName}</span>
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <FaWindowClose className="icon-close" onClick={handleClick} />
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order-review">Order Review</NavLink>
                <NavLink to="/inventory-management">Manage Inventory</NavLink>
                <NavLink to="/register">
                    Register
                </NavLink>
                {
                    user.email ? <span className="log-out" onClick={logOut} >Log out</span> :
                        <NavLink activeStyle={activeStyle} to="/login">
                            Login
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Header;