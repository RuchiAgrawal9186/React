import React from "react";
import { CDN_URL } from "../Utils/constant";

const RestorantCard = ({ resData }) => {
  const {
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    name,
    sla,
    aggregatedDiscountInfo,
    areaName,
  } = resData;
  return (
    <div className="w-full overflow-hidden rounded-2xl transition duration-300 transform hover:hover:scale-[1.06] cursor-pointer">
      <div className="relative">
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-40 object-cover shadow-md rounded-2xl"
        />
        {/* Overlay Offer */}
        {aggregatedDiscountInfo?.shortDescriptionList?.[0]?.meta && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-semibold px-3 py-2">
            {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
          </div>
        )}
      </div>

      <div className="p-3">
        {/* Restaurant Name */}
        <h3 className="text-base font-bold text-gray-800">{name}</h3>

        {/* Rating and Delivery */}
        <div className="flex items-center gap-1 text-sm text-gray-700 font-medium my-1">
          <span className="text-green-600 font-semibold">★ {avgRating}</span>
          <span>•</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 truncate">{cuisines?.join(", ")}</p>

        {/* Location */}
        <p className="text-sm text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};

// higher order component which give restaurantCard which is promoted

// input -> RestorantCard -> output -> restaurantPromotedCard

export const restaurantPromotedCard = (RestorantCard) => {
  return (props) => {
    return (
      <div>
        <label>PROMOTED</label>
        <RestorantCard {...props} />
      </div>
    );
  };
};

export default RestorantCard;
