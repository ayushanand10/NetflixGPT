import React, { useRef } from "react"
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from "react-redux"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants"
import { addGptQueryResponse } from "../utils/gptSlice"

const SearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.preferredLanguage)
  const searchText = useRef(null)

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    )

    const json = await data.json()

    return json.results
  }

  const handleGptSearch = async () => {
    const GptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies which are comma separated like the example given ahead. Example: Harry Poter, Sanam Teri Kasam, Men in Black, The Dark Knight, Sholay"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GptQuery }],
      model: "gpt-3.5-turbo",
    })

    const gptMovieNames = gptResults?.choices?.[0]?.message?.content.split(", ")

    // console.log(gptMoviesName)

    const promiseArray = gptMovieNames.map((movie) => searchMoviesTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)

    console.log(tmdbResults)

    dispatch(
      addGptQueryResponse({
        movieNames: gptMovieNames,
        movieResults: tmdbResults,
      })
    )
  }

  return (
    <div>
      <div className='pt-32 md:pt-[10%] md:w-[55%] m-auto'>
        <form
          className='p-4 bg-black/90 flex flex-col gap-2 md:flex-row items-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type='text'
            className='outline-none px-2 md:px-3 py-1 w-full rounded bg-transparent text-white text-xl md:text-2xl '
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className='w-1/4 md:w-auto md:px-8 py-1 text-lg font-medium bg-netflix text-white rounded-md transition hover:bg-netflix/85'
            onClick={handleGptSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
