import React from 'react';
import logo from '../../images/logo.svg'
import './Login.css'
const Login = () => {
    return (
        <div className="login-form-container">
            <div className="login-form">
                <img src={logo} className="logo" alt="Business view - Reports" />
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="nome@email.com.br" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;