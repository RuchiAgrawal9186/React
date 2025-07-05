import React, { useEffect, useState } from "react";
import RestorantCard from "./RestorantCard";
import { cards } from "../Utils/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  const [restCardData, setRestCardData] = useState([]);
  const[filterData,setFilterData]=useState([])
  const [search, setSearch] = useState("");

  // after render component we want to again render we can use useEffect

  const fetchData = async () => {
    let res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
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
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={(e) => {
          
            let searchData = restCardData?.filter((el) =>
              el?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
            );
            setFilterData(searchData);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filterdCard = restCardData?.filter(
            (el) => el?.info?.avgRating > 4.3
          );
          setFilterData(filterdCard);
        }}
      >
        Top rating
      </button>
      <div className="res-container">
        {filterData?.map((el, index) => {
          return (
            <Link to={`/restaurant/${el?.info?.id}`} key={el?.info?.id}>
              <RestorantCard
                resData={el?.info}
                // key={el?.info?.id}
              ></RestorantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
