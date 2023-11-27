import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData;

  return (
    <div className="w-[300px] shadow-xl rounded-lg p-4 hover:scale-95 transition duration-300 ease-in-out">
      <div className="">
        <img
          className="rounded-xl object-cover h-[226px] w-[100%] "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-3">
        <h2 className="font-bold pt-2 text-lg">{name}</h2>
        <h3>⭐ {avgRating} </h3>
        <h4>{costForTwo} </h4>
        <h4 className="text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </h4>
        {/* <h4>{areaName} </h4> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
