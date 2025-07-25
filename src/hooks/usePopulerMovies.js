import { useDispatch, useSelector } from "react-redux";
import { addPopulerMovies} from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";


const usePopulerMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopulerMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopulerMovies(json.results))
  };

  useEffect(() => {
     !popularMovies && getPopulerMovies();
  },[]);
}

export default usePopulerMovies;