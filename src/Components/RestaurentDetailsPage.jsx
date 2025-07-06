import React, { useEffect, useState } from "react";
import RestaurantsCardPage from "./RestaurantsCardPage";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurentDetailsPage = () => {
  const { restId } = useParams();
  const restaurants = useRestaurantMenu(restId);

  return (
    <div>
      {restaurants?.map((el) => {
        return (
          <RestaurantsCardPage
            resData={el?.card?.info}
            key={el?.card?.info?.id}
          />
        );
      })}
    </div>
  );
};

export default RestaurentDetailsPage;
