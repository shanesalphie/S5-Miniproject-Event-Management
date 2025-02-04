import React, { useState } from 'react';
import logo from "../../assets/logo.png"

import "./login.css";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        };

        fetch('/login', fetchOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Successful login
                    console.log('Login successful!');
                    // Redirect to homepage or other protected page
                } else {
                    // Failed login
                    setErrorMessage(data.message);
                }
            });
    };

    return (
        <div className="loginForm">
            <img src={logo} alt="" width={300} />

            <h1 className="">Login</h1>
            <form className="" onSubmit={handleSubmit}>
                <label className="label">Email:</label>
                <input type="email" value={email} className="input" onChange={(event) => setEmail(event.target.value)} />

                <label className="label">Password:</label>
                <input type="password" value={password} className="input" onChange={(event) => setPassword(event.target.value)} />

                <button type="submit" className="button">Login</button>

                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
            <div className="register_option">Not a user? <Link to={'/register'}>Register</Link> yourself.</div>
        </div>
    );
};

export default LoginForm;