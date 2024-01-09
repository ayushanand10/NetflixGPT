import React from "react"

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-72 px-8 flex flex-col gap-4 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="text-lg w-1/2 text-white">{overview}</p>
      <div className='flex gap-4'>
        <button className="px-10 py-2 rounded bg-white font-medium text-lg text-black hover:opacity-80">Play</button>
        <button className="px-10 py-2 rounded font-medium text-white text-lg bg-white/20">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
