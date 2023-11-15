import React from 'react';
import './services.css'; // Make sure to create a CSS file for styling

import logo from "../assets/logo.png"
import profileIcon from "../assets/profile.svg"

export default function Services() {

    let events = [{
        eventName: "Weddings",
        package_1: "Full Event Planning Package - 1,60,000 for 4 hours",
        package_2: "Partial Event Planning Package - 75,000 for four hours",
        package_3: "Day-of Coordination - 1,20,000 for 4 hours",
    },
    {
        eventName: "Private Parties",
        package_1: "Birthday Celebrations - 1,60,000 for 4 hours",
        package_2: "Anniversaries - 75,000 for four hours",
        package_3: "Private Events - 1,20,000 for 4 hours",
    },
    {
        eventName: "Corporate Events",
        package_1: "Conferences - 75,000 for four hours",
        package_2: "Product Launches - 1,20,000 for 4 hours",
        package_3: "Team Building Events - 1,60,000 for 4 hours",
    }]

    return (
        <div className="service">

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <a href="">Services</a>
                        <a href="#features">Features</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} />
                    </div>
                </div>
            </div>

            <div className="container">
                <main className='main'>
                    <h2 className='heading'>Services</h2>
                    <section className="services">
                        {
                            events.map((event) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="event">
                                        <h3>{event.eventName}</h3>
                                        <p>{event.package_1}</p>
                                        <p>{event.package_2}</p>
                                        <p>{event.package_3}</p>
                                        <button className="book-btn">
                                            Book Now
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </section>
                </main>
            </div>
        </div>
    );
}
