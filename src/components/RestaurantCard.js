import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-Content">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h3>{avgRating} stars</h3>
        <h4>{costForTwo} </h4>
        <h4>{areaName} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
