import React, { useEffect, useState } from "react";
import RestaurantsCardPage from "./RestaurantsCardPage";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentDetailsPage = () => {
  const { restId } = useParams();
  const restaurants = useRestaurantMenu(restId);
  const [expand, setExpand] = useState({ 0: true });
  if (restaurants === null) {
    return <h1>Loading.....</h1>;
  }

  const text = restaurants?.cards?.[0]?.card?.card?.text;
  const itemCards =
    restaurants?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards || [];

  const categories =
    restaurants?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length >
    0
      ? restaurants?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (el) =>
            el?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      : [];

  const handleExpand = (index) => {
    setExpand((prev) => ({ [index]: !prev[index] }));
  };

  return (
    <div className="px-4 py-6 w-6/12 mx-auto">
      <h1>{text}</h1>

      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            category={category?.card?.card}
            handleExpand={handleExpand}
            index={index}
            expand={expand}
          ></RestaurantCategory>
        );
      })}
    </div>
  );
};

export default RestaurentDetailsPage;
