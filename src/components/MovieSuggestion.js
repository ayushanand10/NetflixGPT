import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const MovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt)

  if (!movieNames) return null

  return (
    <div className="mt-4 bg-black/90 p-4">
      <h1 className="text-3xl md:text-5xl text-white font-medium ">Search Results</h1>
      <div className=''>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieSuggestion
