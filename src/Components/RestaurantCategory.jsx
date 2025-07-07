import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ category, expand, index, handleExpand }) => {
  return (
    <div className=" w-full border-b-10 border-gray-300 py-3">
      <div className="flex justify-between items-center">
        <label className="font-bold text-1xl ">
          {category?.title} {`(${category?.itemCards?.length})`}
        </label>

        {expand[index] ? (
          <IconChevronUp stroke={2} onClick={() => handleExpand(index)} />
        ) : (
          <IconChevronDown stroke={2} onClick={() => handleExpand(index)} />
        )}
        {/* <IconChevronUp stroke={2} /> */}
      </div>

      {expand[index] && (
        <RestaurantCategoryList
          cards={category?.itemCards}
        ></RestaurantCategoryList>
      )}
    </div>
  );
};

export default RestaurantCategory;
