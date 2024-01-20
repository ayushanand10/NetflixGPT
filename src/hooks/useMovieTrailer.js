import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
  // Fetch movie's trailer data and store it in the redux store
  const dispatch = useDispatch()

  const trailerVideo = useSelector(store=> store.movies.trailerVideo)

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    )
    const movieClips = await data.json()

    const trailerData = movieClips.results.filter(
      (clip) => clip.type === "Trailer"
    )
    //   Handling possible errors : no trailer, 1 trailer, multiple trailers
    const trailer = trailerData.length ? trailerData[0] : movieClips[0]

    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    !trailerVideo && getTrailerVideo()
  }, [])
}

export default useMovieTrailer
