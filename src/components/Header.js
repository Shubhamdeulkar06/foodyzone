import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between  shadow-lg px-[8%] py-2">
      <div className="">
        <img className="w-16 md:w-32 rounded-full" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className=" hidden lg:flex lg:p-4 lg:m-4 lg:justify-center lg:items-center font-bold ">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:text-orange-500 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-orange-500">Cart</li>
          <button
            className=" py-2 px-4 bg-orange-400 hover:bg-orange-500 transition duration-200"
            onClick={(e) => setIsLogIn(!isLogIn)}
          >
            {isLogIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
