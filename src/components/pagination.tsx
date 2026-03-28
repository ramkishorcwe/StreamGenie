// import { Button } from "@headlessui/react";
// // import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setMovies } from "../store/movies";
// import resource from "../resource";

export interface IPaginationProps {
  apiEndPoint: string;
  pageNo: number;
  totalPages: number;
}

// const Pagination = ({ pageNo = 1, apiEndPint, totalPages=100 }: IPaginationProps) => {
//   const endPoint: string | undefined = resource.endPoints.find(
//     (tempEndPoint: string) => tempEndPoint.includes(apiEndPint)
//   );
//   const dispatch = useDispatch();

//   const fetchMovies = async (page: number) => {
//     if (endPoint) {
//       const fullUrl = `${
//         import.meta.env.VITE_BASE_URI
//       }${endPoint}?language=en-US&page=${page}`;
//       try {
//         const response = await fetch(fullUrl, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${
//               import.meta.env.VITE_TMDB_API_ACCESS_TOKEN
//             }`,
//           },
//         });
//         const movies: any = await response.json();
//         const catagreeNameKey: string[] = apiEndPint.split("/");
//         dispatch(
//           setMovies({
//             [catagreeNameKey[catagreeNameKey.length - 1]]: movies,
//           })
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div className="flex align-middle justify-center gap-5 left-0 right-0">
//       <Button
//         className={"border-1 p-2 rounded-md cursor-pointer bg-red-600"}
//         onClick={() => fetchMovies(pageNo - 1)}
//       >
//         Prev
//       </Button>
//       <span className={"p-2 rounded-md"}>{pageNo}...</span>
//       <span className={"p-2 rounded-md"}>{totalPages}</span>
//       <Button
//         className={"border-1 p-2 rounded-md cursor-pointer bg-red-600"}
//         onClick={() => fetchMovies(pageNo + 1)}
//       >
//         Next
//       </Button>
//     </div>
//   );
// };
// export default Pagination;
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { setMovies } from "../store/movies";
import resource from "../resource";
import { useState } from "react";

const Pagination = ({ pageNo = 1, apiEndPoint, totalPages = 100 }: IPaginationProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const endPoint = resource.endPoints.find((ep) =>
    ep.includes(apiEndPoint)
  );

  const fetchMovies = async (page: number) => {
    if (!endPoint || page < 1 || page > totalPages) return;

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URI}${endPoint}?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
          },
        }
      );

      const movies = await response.json();

      const key = apiEndPoint.split("/").pop() || "movies";

      dispatch(setMovies({ [key]: movies }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-6">

      {/* 🔙 Prev */}
      <Button
        disabled={pageNo <= 1 || loading}
        onClick={() => fetchMovies(pageNo - 1)}
        className={`px-4 py-2 rounded-md ${pageNo <= 1 || loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
          }`}
      >
        Prev
      </Button>

      {/* 📄 Page Info */}
      <div className="text-lg font-semibold">
        {pageNo} / {totalPages}
      </div>

      {/* 🔜 Next */}
      <Button
        disabled={pageNo >= totalPages || loading}
        onClick={() => fetchMovies(pageNo + 1)}
        className={`px-4 py-2 rounded-md ${pageNo >= totalPages || loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
          }`}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;