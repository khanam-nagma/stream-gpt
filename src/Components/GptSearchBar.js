import React from 'react'
import leng from '../Utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className=' p-2 m-4 col-span-9' placeholder={leng[langKey].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-sm'>
            {leng[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar