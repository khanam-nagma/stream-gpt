import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../Utils/constants'

const GptSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="md:h-auto h-screen object-cover" src={BG_URL} alt="BgLogo"/>
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GptSearchPage;