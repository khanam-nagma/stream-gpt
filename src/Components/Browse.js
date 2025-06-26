
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  useNowPlayingMovies();
  usePopulerMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearchPage ? ( <GptSearchPage/>) :
       ( <>
        <MainContainer/>
       <SecondaryContainer/>
        </>
      )}

    </div>
  )
}

export default Browse