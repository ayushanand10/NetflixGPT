import React from "react"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainComponent from "./MainComponent"
import SecondaryComponent from "./SecondaryComponent"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  // API call
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  return (
    <div className=''>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  )
}

export default Browse
