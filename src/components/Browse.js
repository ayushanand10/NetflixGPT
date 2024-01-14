import React from "react"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainComponent from "./MainComponent"
import SecondaryComponent from "./SecondaryComponent"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"

const Browse = () => {
  // API call
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()

  return (
    <div className="">
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  )
}

export default Browse
