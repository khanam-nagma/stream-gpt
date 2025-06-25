
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopulerMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse