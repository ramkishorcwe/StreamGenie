import { useSelector } from "react-redux";
import Header from "./header";
import type { IStore } from "../store/store";
import useFetchMovie from "./custom-hook/fetch-movie";
import MoviesList from "./movie-list";
import HeroVideo from "./hero-video";
import type { IMovie } from "../store/movies";

export interface IAllMovie{
  "Now Playing": IMovie[]
  "Popular": IMovie[]
}

const Home = () => {
  useFetchMovie();
  const nowPlaying:IMovie[] = useSelector((store:IStore)=>store.movies.nowPlaying)
  const popular : IMovie[] = useSelector((store:IStore)=>store.movies.nowPlaying)
  const movies: IAllMovie = {
  "Now Playing": nowPlaying,
  Popular: popular
  }
  return (
    <div>
      <Header />
      <HeroVideo
        title={"Title"}
        description={"Description"}
        id={"-SFcIUEvNOQ"}
      />
      <div className="absolute w-[97%]">
        {Object.keys(movies).map((listType: string) => (
          <MoviesList key={listType} title={listType} list={movies[`${listType}`]} />
        ))}      
      </div>
    </div>
  );
};
export default Home;
