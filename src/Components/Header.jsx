import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/constant'

const Header = () => {
  const [status,setStatus]=useState('Login')
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
