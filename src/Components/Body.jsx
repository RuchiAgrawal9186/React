import React, { useState } from "react";
import RestorantCard from "./RestorantCard";
import { cards } from "../Utils/mockData";

const Body = () => {
  const [topRatingCard,setTopRatingCard]=useState([...cards])
  return (
    <div className="body">
      <div className="search">search</div>
      <button onClick={()=> {
        const filterdCard = topRatingCard?.filter((el)=> el?.card?.card?.info?.avgRating > 4.5)
        setTopRatingCard(filterdCard)
          
      }}>Top rating</button>
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
