import React from 'react';
import './test.css'; // Make sure to create a CSS file for styling

class Test extends React.Component {
    redirectToBookingPage = () => {
        window.location.href = 'https://www.google.com'; // Replace with your booking page URL
    };

    render() {
        return (
            <div className="service">
                <header className="heading">
                    <h1>GatherEase</h1>
                </header>
                <div className="container">
                    <nav className="navi">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button className="book-btn" onClick={this.redirectToBookingPage}>
                            Book an Event
                        </button>
                    </nav>
                    <main className='main'>
                        <section className="services">
                            <h2>Services</h2>
                            <div className="event">
                                <h3>Weddings</h3>
                                <p>Full Event Planning Package - 1,60,000 for 4 hours</p>
                                <p>Partial Event Planning Package - 75,000 for four hours</p>
                                <p>Day-of Coordination - 1,20,000 for 4 hours</p>
                                <button className="book-btn" onClick={this.redirectToBookingPage}>
                                    Book Now
                                </button>
                            </div>
                            <div className="event">
                                <h3>Private Parties</h3>
                                <p>Birthday Celebrations - 1,60,000 for 4 hours</p>
                                <p>Anniversaries - 75,000 for four hours</p>
                                <p>Private Events - 1,20,000 for 4 hours</p>
                                <button className="book-btn" onClick={this.redirectToBookingPage}>
                                    Book Now
                                </button>
                            </div>
                            <div className="event">
                                <h3>Corporate Events</h3>
                                <p>Conferences - 75,000 for four hours</p>
                                <p>Product Launches - 1,20,000 for 4 hours</p>
                                <p>Team Building Events - 1,60,000 for 4 hours</p>
                                <button className="book-btn" onClick={this.redirectToBookingPage}>
                                    Book Now
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default Test;
