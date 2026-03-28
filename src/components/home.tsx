import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import type { IStore } from "../store/store";
import MoviesList from "./movie-list";
import HeroContainer from "./hero-video";
import type { IMovie } from "../store/movies";
import { useEffect, useState } from "react";
import { setMovies } from "../store/movies";
import resource from "../resource";
import CustomSearch from "./custom-search";

export interface IAllMovie {
  "Now Playing": IMovie[];
  Popular: IMovie[];
  "Top Rated": IMovie[];
}

const Home = () => {
  const [isSearch, SetIsSearch] = useState(false);
  const dispatch = useDispatch();
  const movies: any = useSelector((store: IStore) => store.movies);

  const toggleModalOpenClose = (status: boolean) => {
    SetIsSearch(status)
  }

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
    <div className="relative min-h-screen bg-black text-white">

      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1668473366952-45f06fbf6492"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Header />
      <CustomSearch isSearch={isSearch} toggleModalOpenClose={toggleModalOpenClose} />

      {/* Hero */}
      <HeroContainer />

      {/* Movie Sections */}
      <div className="px-6 md:px-12 -mt-20 relative z-10">
        {Object.keys(movies).map((listType: string) => (
          <MoviesList
            key={listType}
            title={listType}
            list={movies[listType]?.results || []}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
