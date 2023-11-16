import React, { useState, useEffect } from 'react';

import "./landing.css"
import logo from "../../assets/logo.png"
import profileIcon from "../../assets/profile.svg"
import heroImage from "../../assets/hero.webp"
import servicesImage from "../../assets/services.webp"
import flower from "../../assets/flower.svg"
import { Link } from 'react-router-dom';

export default function Landing() {
    const [showDropdown, setShowDropdown] = useState(false);



    return (
        <div className="landing">

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <Link to='/services' >Services</Link>
                        <a href="#features">Features</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} onClick={() => setShowDropdown(!showDropdown)} />
                        {showDropdown && (
                            <div className="dropdown">
                                <Link to={'/login'} className="dropdown-item">Login</Link>
                                <Link to={'/register'} className="dropdown-item">Sign Up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="title">Unforgettable Events Made Easy</div>
            </div>

            <div className="service_details">
                <div className="details_container">
                    <h1 className='heading_1'>OUR SERVICES</h1>
                    <img src={flower} width={50} />
                    <h3 className='heading_2'>Leave the Details to us</h3>
                    <button className='learn_more'>LEARN MORE</button>
                </div>
                <div className="service_image" style={{ backgroundImage: `url(${servicesImage})` }}></div>
            </div>
        </div>
    )
}