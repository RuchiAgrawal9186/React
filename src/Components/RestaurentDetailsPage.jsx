import React, { useEffect, useState } from "react";
import RestaurantsCardPage from "./RestaurantsCardPage";
import { useParams } from "react-router-dom";

const RestaurentDetailsPage = () => {
  const { restId } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  const fetchData = async () => {
    let res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let data = await res?.json();

    setRestaurants(
      data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.itemCards
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

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
