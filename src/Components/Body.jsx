import React, { useEffect, useState } from "react";
import RestorantCard from "./RestorantCard";
import { cards } from "../Utils/mockData";

const Body = () => {
  const [topRatingCard, setTopRatingCard] = useState([...cards]);

  // after render component we want to again render we can use useEffect

  const fetchData = async () => {
    let res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    let data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  return (
    <div className="body">
      <div className="search">search</div>
      <button
        onClick={() => {
          const filterdCard = topRatingCard?.filter(
            (el) => el?.card?.card?.info?.avgRating > 4.5
          );
          setTopRatingCard(filterdCard);
        }}
      >
        Top rating
      </button>
      <div className="res-container">
        {topRatingCard?.map((el, index) => {
          return (
            <RestorantCard
              resData={el?.card?.card?.info}
              key={el?.card?.card?.info?.id}
            ></RestorantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
