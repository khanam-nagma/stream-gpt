import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayMovies: null,
        populerMovies: null,
        trailerVideo: null
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayMovies = action.payload;
      },
      addPopulerMovies: (state, action) => {
        state.populerMovies = action.payload;
      },
      addUpComingMovies: (state, action) => {
        state.upComingMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload;
      }
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopulerMovies, addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;