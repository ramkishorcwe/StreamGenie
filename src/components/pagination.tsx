import { Button } from "@headlessui/react";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../store/movies";
import resource from "../resource";

export interface IPaginationProps {
  apiEndPint: string;
  pageNo: number;
  totalPages: number;
}

const Pagination = ({ pageNo = 1, apiEndPint, totalPages=100 }: IPaginationProps) => {
  const endPoint: string | undefined = resource.endPoints.find(
    (tempEndPoint: string) => tempEndPoint.includes(apiEndPint)
  );
  const dispatch = useDispatch();

  // const allUrls = [
  //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  //   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  // ];

  const fetchMovies = async (page: number) => {
    if (endPoint) {
      const fullUrl = `${
        import.meta.env.VITE_BASE_URI
      }${endPoint}?language=en-US&page=${page}`;
      try {
        const response = await fetch(fullUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_TMDB_API_ACCESS_TOKEN
            }`,
          },
        });
        const movies: any = await response.json();
        const catagreeNameKey: string[] = apiEndPint.split("/");
        dispatch(
          setMovies({
            [catagreeNameKey[catagreeNameKey.length - 1]]: movies,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex align-middle justify-center gap-5 left-0 right-0">
      <Button
        className={"border-1 p-2 rounded-md cursor-pointer bg-red-600"}
        onClick={() => fetchMovies(pageNo - 1)}
      >
        Prev
      </Button>
      <span className={"p-2 rounded-md"}>{pageNo}...</span>
      <span className={"p-2 rounded-md"}>{totalPages}</span>
      <Button
        className={"border-1 p-2 rounded-md cursor-pointer bg-red-600"}
        onClick={() => fetchMovies(pageNo + 1)}
      >
        Next
      </Button>
    </div>
  );
};
export default Pagination;
