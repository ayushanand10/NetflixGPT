import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies)
  
  return (
    <div className='bg-black'>
      <div className='-mt-56 relative z-20'>
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        />
      </div>
      {/* 
        MovieList - Popular
          MovieCard * n
        MovieList - Trending
          MovieCard * n
        MovieList - Now Playing
          MovieCard * n
        MovieList - Horror
          MovieCard * n
      */}
    </div>
  )
}

export default SecondaryComponent
