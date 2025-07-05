import React from 'react'

const RestaurantsCardPage = ({resData}) => {
    const { name, imageId, description, ratings, price, defaultPrice } =
      resData;
      console.log(resData,"restdata")
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default RestaurantsCardPage
