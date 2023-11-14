import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId);

  if (restaurant === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurant?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId} </h1>
        <h2>{name}</h2>
        <img src={CDN_URL + cloudinaryImageId} />
        <h2>{cuisines}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
