
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="login-form-container">
            <div className="login-form">
                <form className="form" >
                    <h2>Please Register</h2>
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
                <p style={{ marginBottom: '20px' }}>Already have an account? <Link to="/login">Login</Link></p>
                <button className="primary">Sign in with Google</button>
            </div>
        </div>
    );
};

export default Register;