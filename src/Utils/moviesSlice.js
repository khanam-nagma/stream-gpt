import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayMovies: null,
        trailerVideo: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload;
      }
    },
});

export const {addNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;