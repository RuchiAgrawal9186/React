import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  return restaurants;
};

export default useRestaurantMenu;
