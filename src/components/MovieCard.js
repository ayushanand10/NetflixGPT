import React from "react"
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ poster, title }) => {
  if (!poster) return

  return (
    <div className='relative w-40 rounded-md flex justify-center items-end  hover-trigger'>
      <img
        className="h-56 rounded-lg md:rounded-none"
        src={IMG_CDN_URL + poster}
        alt='Movie Poster'
      />
      <h1 className='invisible pt-8 pb-4 px-2 text-center absolute text-white md:text-2xl bg-gradient-to-t from-black to-black/10 w-full'>
        {title}
      </h1>
    </div>
  )
}

export default MovieCard
