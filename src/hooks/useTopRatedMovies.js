import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"

const useTopRatedMovies = () => {
  const dispatch = useDispatch()

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    )

    const json = await data.json()

    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    !topRatedMovies && fetchTopRatedMovies()
  }, [])
}

export default useTopRatedMovies
