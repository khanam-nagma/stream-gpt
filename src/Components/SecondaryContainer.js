import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className=' bg-black'>
      <div className='-mt-40 pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayMovies||[]}/>
      <MovieList title={"Trending"} movies={movies.nowPlayMovies||[]}/>
      <MovieList title={"Popular"} movies={movies.populerMovies||[]}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayMovies||[]}/>
      <MovieList title={"Horror"} movies={movies.nowPlayMovies||[]}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer