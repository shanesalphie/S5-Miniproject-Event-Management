import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"

import "./login.css";
import { Link } from 'react-router-dom';


export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('');
        }
    }, [password, confirmPassword]);

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
        <div className="registerForm">
            <img src={logo} alt="" width={300} />

            <h1 className="">Register</h1>
            <form className="" onSubmit={handleSubmit}>
                <label className="label">Email:</label>
                <input type="email" value={email} className="input" onChange={(event) => setEmail(event.target.value)} />

                <label className="label">Password:</label>
                <input type="password" value={password} className="input" onChange={(event) => setPassword(event.target.value)} />

                <label className="label">Confirm Password:</label>
                <input type="password" value={confirmPassword} className="input" onChange={(event) => setConfirmPassword(event.target.value)} />

                <button type="submit" className="button">Login</button>

                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
            <div className="register_option">Already a user? <Link to={'/login'}>Register</Link> to your account.</div>
        </div>
    )
}