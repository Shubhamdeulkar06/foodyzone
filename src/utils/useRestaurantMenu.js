import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurantMenu;
