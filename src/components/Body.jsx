import { useContext, useEffect, useState } from "react";
import resObj from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) return <h1>You are Offline</h1>;

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log("hello");
    fetchData();

    // return () => {
    //   second
    // }
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-box"
            data-testid="searchInput"
          />
          <button
            onClick={() => {
              const filteredRestautants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestautants);
            }}
          >
            Search
          </button>
        </div>
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button> */}
        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="">User Name :</label>
          <input
            type="text"
            value={loggedInUser}
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((resData) => (
          <Link
            key={resData.info.id}
            to={"/restaurant/" + resData.info.id}
            style={{ textDecoration: "none" }}
          >
            {resData.info.promoted == true ? (
              <RestaurantCardPromoted resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
            {/* <RestaurantCard resData={resData} /> */}
          </Link>
        ))}

        {/* <RestaurantCard resName="KFC" cuisine="Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
