import { useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}

        {/* <RestaurantCard resName="KFC" cuisine="Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
