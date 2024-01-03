import React from 'react'
import './navbar.css'
import logoo from '../../assets/logo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logoo} alt="logoo" className='logo' />
        <div className="navitems">
            <Link className="navitems">home</Link>
            <Link className="navitems">services</Link>
            <Link className="navitems">about</Link>
            <Link className="navitems">gallery</Link>
            <Link className="navitems">contact</Link>
        </div>
    </nav>
  )
}

export default Navbar