import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'
import { Link } from 'react-router-dom';

const Header = () => {
  const [status,setStatus]=useState('Login')
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          if (status === "Login") {
            setStatus("Logout");
          } else {
            setStatus("Login");
          }
        }}
      >
        {status}
      </button>
    </div>
  );
}

export default Header
