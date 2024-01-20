import { LOGIN_BG } from "../utils/constants"
import MovieSuggestion from "./MovieSuggestion"
import SearchBar from "./SearchBar"

const GptSearch = () => {
  return (
    <div className=''>
      <img
        className='fixed -z-10 h-screen w-full object-cover md:object-none'
        src={LOGIN_BG}
        alt='login-bg'
      />
      <SearchBar />
      <MovieSuggestion />
    </div>
  )
}

export default GptSearch
