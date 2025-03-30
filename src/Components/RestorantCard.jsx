import React from 'react'
import { CDN_URL } from '../Utils/constant';

const RestorantCard = ({resData}) => {
    const {  avgRating, cloudinaryImageId,cuisines,costForTwo,name } = resData;
    return (
      <div className="res-card">
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alg="food"
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData?.sla?.deliveryTime} minutes</h4>
      </div>
    );
}

export default RestorantCard
