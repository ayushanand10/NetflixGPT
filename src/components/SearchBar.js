import React from "react"
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux"

const SearchBar = () => {

  const langKey = useSelector(store => store.config.preferredLanguage)

  return (
    <div>
      <div className='pt-[10%] w-[55%] m-auto'>
        <form className='p-4 bg-black/90 flex'>
          <input
            type='text'
            className='outline-none px-3 py-1 mr-4 w-full rounded bg-transparent text-white text-2xl '
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className='px-8 py-1 mr-4 text-lg font-medium bg-netflix text-white rounded-md transition hover:bg-netflix/85'>
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
