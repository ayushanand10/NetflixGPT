import React from "react"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux"

const MainComponent = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies)

  if (!movies) return

  const mainMovie = movies[0]

  const { original_title, overview, id } = mainMovie

  return (
    <div className='flex flex-col bg-black pt-36 md:pt-0 pb-10 md:pb-0'>
      <VideoTitle
        title={original_title}
        overview={overview}
      />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainComponent
