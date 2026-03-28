// import VideoSkeleton from "./shimar-ui/video-skeleton";
// import Movie from "./movie";
// import { useSelector } from "react-redux";
// import Pagination from "./pagination";
// import { useState } from "react";

// const AllMovie = () => {
//   const location: any[] = window.location.pathname.split("/");
//   const allMovies = useSelector(
//     (store: any) => store.movies[location[location.length - 1]]
//   );
//   const [isShowAll, setIsShowAll] = useState(false)
//   const buttonText = !isShowAll?"Show All":"Show Less";
//   const showVideosInRow = 6
//   // console.log(allMovies);

//   return (
//     <>
//       <h3 className="text-xl font-bold">
//         {location[location.length - 1]}
//       </h3>
//       {allMovies.results && allMovies.results.length > 0 ? (
//         <div className="flex flex-wrap">
//           {allMovies.results.length > 0 &&
//             allMovies.results.map((movie: any, index:number) => {
//               if(index+1<showVideosInRow*2 || isShowAll)
//                return <Movie key={movie.id} className={"min-w-fit"} movie={movie} />
// })}
//         </div>
//       ) : (
//         <div className="flex gap-5">
//           {Array.from({ length: 4 }).map((_, index) => (
//             <VideoSkeleton key={index} />
//           ))}
//         </div>
//       )}
//       <button onClick={()=>setIsShowAll(!isShowAll)}>{buttonText}</button>
//       <Pagination pageNo={allMovies.page} apiEndPint={location[location.length - 1]}  totalPages={allMovies.total_pages}/>
//     </>
//   );
// };
// export default AllMovie;


import VideoSkeleton from "./shimar-ui/video-skeleton";
import Movie from "./movie";
import { useSelector } from "react-redux";
import Pagination from "./pagination";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { IStore } from "../store/store";


const AllMovie = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/").pop();

  const allMovies = useSelector(
    (store: IStore) => store.movies[category]
  );

  const [isShowAll, setIsShowAll] = useState(false);

  const showLimit = 12;

  const moviesToShow = isShowAll
    ? allMovies?.results || []
    : allMovies?.results?.slice(0, showLimit) || [];

  return (
    <div className="bg-[#111] text-white p-4 min-h-screen">

      {/* 🔥 Title */}
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {category}
      </h2>

      {/* 🎬 Movies Grid */}
      {moviesToShow.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {moviesToShow.map((movie: any) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <VideoSkeleton key={index} />
          ))}
        </div>
      )}

      {/* 🔘 Show More / Less */}
      {allMovies?.results?.length > showLimit && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            {isShowAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      {/* 📄 Pagination */}
      <div className="mt-8">
        <Pagination
          pageNo={allMovies?.page}
          apiEndPoint={category!}
          totalPages={allMovies?.total_pages}
        />
      </div>
    </div>
  );
};

export default AllMovie;