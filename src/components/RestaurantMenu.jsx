import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log("resInfo", resInfo);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div className="menu">
      <h1>name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Biriyani</li>
        <li>Biriyani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
