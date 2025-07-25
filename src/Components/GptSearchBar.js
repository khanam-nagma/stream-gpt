import React, { useRef } from "react";
import leng from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);
   // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "developer", content: "Talk like a pirate." },
        { role: "user", content: gptQuery },
      ],
    });

    console.log(gptResults.choices?.[0]?.message?.content);
    // Hera Pheri, Chupke Chupke, Angoor, Padosan, Chhoti Si Baat
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    //["Hera Pheri", "Chupke Chupke", "Angoor", "Padosan"," Chhoti Si Baat"]
    //For each movie I will search TMDB API
    
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))

  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-2 m-4 col-span-9"
          placeholder={leng[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-sm"
          onClick={handleGptSearchClick}
        >
          {leng[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
