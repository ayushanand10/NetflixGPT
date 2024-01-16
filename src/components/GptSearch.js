import { LOGIN_BG } from "../utils/constants"
import MovieSuggestion from "./MovieSuggestion"
import SearchBar from "./SearchBar"

const GptSearch = () => {
  return (
    <div className=''>
      <img
        className='absolute -z-10 h-screen w-full'
        src={LOGIN_BG}
        alt='login-bg'
      />
      <SearchBar />
      <MovieSuggestion />
    </div>
  )
}

export default GptSearch
