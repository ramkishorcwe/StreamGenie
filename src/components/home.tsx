import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import type { IStore } from "../store/store";
// import fetchMovie from "./custom-hook/fetch-movie";
import MoviesList from "./movie-list";
<<<<<<< Updated upstream
import type { IMovie, IMovies } from "../store/movies";
import HeroContainer from "./hero-video";
=======
import type { IMovie } from "../store/movies";
// import HeroContainer from "./hero-video";
>>>>>>> Stashed changes
import { useEffect } from "react";
import { setMovies } from "../store/movies";
import resource from "../resource";

export interface IAllMovie {
  "Now Playing": IMovie[];
  Popular: IMovie[];
  "Top Rated": IMovie[];
}

const Home = () => {
  const dispatch = useDispatch();
  const movies: any = useSelector((store: IStore) => store.movies);

  useEffect(() => {
    resource.endPoints.forEach((endPoint: string) => {
      fetchMovies(endPoint)
    })
  }, []);
  const fetchMovies = async (uri: string) => {
    const fullUrl = `${import.meta.env.VITE_BASE_URI}${uri}`;
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      const movies: any = await response.json();
      const payloadToSetStore = {
        page: movies.page,
        results: [...movies.results],
        total_pages: movies["total_pages"],
        total_results: movies["total_results"]
      }
      const catagreeNameKey: string[] = uri.split("/");
      dispatch(
        setMovies({
          [catagreeNameKey[catagreeNameKey.length - 1]]: payloadToSetStore,
        })
      );
    } catch (error) {
      return error;
    }
  };

  return (
    // <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg')] opacity-100">
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1668473366952-45f06fbf6492')] opacity-100">
      <Header />
      <HeroContainer />
      <div className="w-[97%]">
        {Object.keys(movies).map((listType: string) => (
          <MoviesList
            key={listType}
            title={listType}
            list={movies[`${listType}`].results}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
