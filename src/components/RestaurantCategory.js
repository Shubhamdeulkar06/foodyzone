import react, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="font-bold text-xl">🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
