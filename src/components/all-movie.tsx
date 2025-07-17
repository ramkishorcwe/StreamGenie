import VideoSkeleton from "./shimar-ui/video-skeleton";
import Movie from "./movie";
import { useSelector } from "react-redux";
// import type { IStore } from "../store/store";
import Pagination from "./pagination";

const AllMovie = () => {
  const location: any[] = window.location.pathname.split("/");
  const allMovies = useSelector(
    (store: any) => store.movies[location[location.length - 1]]
  );
  console.log(allMovies);
  
  return (
    <>
      <h3 className="text-xl font-bold">
        {location[location.length - 1]}
      </h3>
      {allMovies.results && allMovies.results.length > 0 ? (
        <div className="flex flex-wrap">
          {allMovies.results.length > 0 &&
            allMovies.results.map((movie: any) => (
              <Movie key={movie.id} className={"min-w-fit"} movie={movie} />
            ))}
        </div>
      ) : (
        <div className="flex gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <VideoSkeleton key={index} />
          ))}
        </div>
      )}
      <Pagination pageNo={allMovies.page} apiEndPint={location[location.length - 1]} />
    </>
  );
};
export default AllMovie;
