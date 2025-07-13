import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../../store/movies";

const useFetchMovie = () => {
  const dispatch = useDispatch()
  const popular = "https://api.themoviedb.org/3/movie/popular?language=en-U"
  const topRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  const upcoming = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  const nowPlaying = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
  useEffect(() => {
    (async () => {
      try {
                // toggle loading
         const data = await fetch(
        nowPlaying,
          {
          method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
      }
        }
      );
      const parseData = await data.json();
      dispatch(setNowPlayingMovies({nowPlaying:parseData.results})) 
      // console.log("data---------",parseData)
      
       return parseData.results;
      } catch (error) {
        //set error
      }finally{
        // toggle loading
      }
    
    })();
  }, []);
};
export default useFetchMovie;
