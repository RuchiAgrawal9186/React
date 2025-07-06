import React, { useEffect, useState } from "react";
import RestorantCard, { restaurantPromotedCard } from "./RestorantCard";
import { cards } from "../Utils/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  const [restCardData, setRestCardData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  const restaurantWithPromoted = restaurantPromotedCard(RestorantCard);

  // after render component we want to again render we can use useEffect

  const fetchData = async () => {
    let res = await fetch(`https://swiggy-api-4c740.web.app/swiggy-api.json`);
    let data = await res.json();
    setRestCardData(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto ">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 flex-end">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for restaurants..."
          className="w-full sm:w-80 px-4 py-2 border border-gray-30 rounded-md shadow-sm bg-white text-black  focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <div className="flex gap-2">
          <button
            onClick={() => {
              const searchData = restCardData?.filter((el) =>
                el?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
              );
              setFilterData(searchData);
            }}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md shadow-md transition"
          >
            Search
          </button>

          <button
            onClick={() => {
              const filteredCard = restCardData?.filter(
                (el) => el?.info?.avgRating > 4.3
              );
              setFilterData(filteredCard);
            }}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition"
          >
            Top Rated
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterData?.map((el) => (
          <Link to={`/restaurant/${el?.info?.id}`} key={el?.info?.id}>
            {el?.info?.promoted ? (
              <restaurantWithPromoted
                resData={el?.info}
              ></restaurantWithPromoted>
            ) : (
              <RestorantCard resData={el?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
