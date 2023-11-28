import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store by using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-orange-500 font-extrabold text-xl">
            <Link to="/cart">Cart- ({cartItems.length} items)</Link>
          </li>
          <button
            className=" py-2 px-4 bg-orange-400 hover:bg-orange-500 transition duration-200"
            onClick={(e) => setIsLogIn(!isLogIn)}
          >
            {isLogIn ? "Logout" : "Login"}
          </button>
          <li className="px-4 font-extrabold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
