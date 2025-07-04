import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
const err=useRouteError()    
  return (
    <div>
      page not found
      <h2>{err?.statue}</h2>
    </div>
  )
}

export default ErrorPage
