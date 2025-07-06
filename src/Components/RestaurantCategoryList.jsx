import React from "react";
import { CDN_URL } from "../Utils/constant";

const RestaurantCategoryList = ({ cards }) => {
  return (
    <div className="space-y-6">
      {cards?.map((el) => {
        const { name, price, description, imageId } = el?.card?.info || {};
        return (
          <div
            key={el?.card?.info?.id}
            className="flex justify-between items-start border-b-1 pb-4"
          >
            {/* LEFT: Info */}
            <div className="w-3/4 pr-4">
              <h3 className="text-base font-bold text-gray-900">{name}</h3>
              <p className="text-sm font-medium text-gray-700 mb-1">
                ₹{Math.floor(price / 100)}
              </p>
              <p className="text-md text-gray-500">{description}</p>
            </div>

            {/* RIGHT: Image + Button */}
            <div className="relative w-30 h-30">
              <img
                src={`${CDN_URL}/${imageId}`}
                alt={name}
                className="w-full h-full object-cover rounded-md shadow"
              />
              <button className="absolute bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-green-600 border border-gray-300 rounded-md text-xs font-bold shadow-md hover:bg-gray-100">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategoryList;
