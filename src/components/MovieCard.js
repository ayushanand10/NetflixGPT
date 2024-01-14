import React from "react"
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ poster }) => {
  return (
    <div>
      <div className='w-40 rounded-md'>
        <img
          src={IMG_CDN_URL + poster}
          alt='Movie Poster'
        />
      </div>
          <h1 className="">{ }</h1>
    </div>
  )
}

export default MovieCard
