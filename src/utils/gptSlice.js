import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptQueryResponse: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames
      state.movieResults = movieResults
    }
  },
})

export const { toggleGptSearchView, addGptQueryResponse } = gptSlice.actions

export default gptSlice.reducer
