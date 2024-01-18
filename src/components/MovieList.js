import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {

  if (!movies) return

  return (
    <div className='px-6'>
      <h1 className='py-4 text-3xl text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex gap-4'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
