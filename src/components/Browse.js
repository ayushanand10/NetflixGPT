import React, { useEffect } from "react"
import Header from "./Header"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainComponent from "./MainComponent"
import SecondaryComponent from "./SecondaryComponent"

const Browse = () => {
  // API call
  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  )
}

export default Browse
