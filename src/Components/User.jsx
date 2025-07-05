import React, { useState } from 'react'

const User = ({name,location}) => {
    const [count1]=useState(1)
    const [count2]=useState(2)
  return (
    <div>
        <h1>count1:{count1}{count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
    </div>
  )
}

export default User
