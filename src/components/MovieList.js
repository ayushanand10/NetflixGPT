import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {

  if (!movies) return

  return (
    <div className='md:px-6'>
      <h1 className='px-2 md:px-0 py-4 text-2xl md:text-3xl text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex gap-2'>
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
