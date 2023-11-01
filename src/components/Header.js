import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button className="login-btn" onClick={(e) => setIsLogIn(!isLogIn)}>
          {isLogIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
