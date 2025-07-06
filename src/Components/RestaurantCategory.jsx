import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ category }) => {
  return (
    <div className=" w-full flex-col">
      <div className="flex justify-between items-center">
        <label className="font-bold text-2xl ">
          {category?.title} {`(${category?.itemCards?.length})`}
        </label>
        <IconChevronDown stroke={2} />
        {/* <IconChevronUp stroke={2} /> */}
      </div>

      <RestaurantCategoryList
        cards={category?.itemCards}
      ></RestaurantCategoryList>
    </div>
  );
};

export default RestaurantCategory;
