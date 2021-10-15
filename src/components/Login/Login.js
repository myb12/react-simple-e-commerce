import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { signInUsingGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/shop')
            })
    }
    return (
        <div className="login-form-container">
            <div className="login-form">
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="nome@email.com.br" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn-regular">Submit</button>
                    </div>
                </form>
                <p style={{ marginBottom: '20px' }}>New to our site? <Link to="/register">Create Account</Link></p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleGoogleSignIn} className="btn-regular">Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;