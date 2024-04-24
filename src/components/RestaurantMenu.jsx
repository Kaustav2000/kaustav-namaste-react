// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
// import useRestaurantMenu from "../utils/useRestaurantMenu";

// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   const resInfo = useRestaurantMenu(resId);

//   console.log("resInfo", resInfo);

//   // useEffect(() => {
//   //   fetchMenu();
//   // }, []);

//   // const fetchMenu = async () => {
//   //   const data = await fetch(MENU_URL + resId);
//   //   const json = await data.json();
//   //   console.log(json);
//   // };

//   return (
//     <div className="menu">
//       <h1>name of Restaurant</h1>
//       <h2>Menu</h2>
//       <ul>
//         <li>Biriyani</li>
//         <li>Biriyani</li>
//         <li>Biriyani</li>
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[2]?.card?.card?.info;

  // const { itemCards } =
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
