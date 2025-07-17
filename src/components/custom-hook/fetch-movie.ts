// import { useDispatch } from "react-redux";
// import { toggleLoading } from "../../store/loading";
// import {setMovies} from "../../store/movies";
// import { setError } from "../../store/error";
// import { useEffect } from "react";

// const useFetchMovie = (base: string) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
// let uri = `${import.meta.env.VITE_TMDB_API_BASE}${base}`;
//     (async () => {
//       try {
//         // toggle loading
//         dispatch(toggleLoading());
//         const data = await fetch(uri, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${
//               import.meta.env.VITE_TMDB_API_ACCESS_TOKEN
//             }`,
//           },
//         });
//         const parseData = await data.json();
//         dispatch(setMovies({ nowPlaying: parseData.results }));
//       } catch (error) {
//         // Todo set error
//         dispatch(
//           setError({
//             code: 403,
//             message: "",
//             componant: "Home Page",
//           })
//         );
//       } finally {
//         // toggle loading
//         dispatch(toggleLoading());
//       }
//     })();
//   }, []);
// };
// export default useFetchMovie;

const fetchMovie = (base: string) => {
  const uri = `${import.meta.env.VITE_BASE_URI}${base}`;

  const fetchMovies = async () => {
    try {
      // dispatch(toggleLoading());
      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });

      const data = await response.json();
      console.log("call from fetch movie", data);
      return { nowPlaying: data.results };
    } catch (error) {
      return error;
    }
  };

  fetchMovies();
  // make sure to include dependencies
};

export default fetchMovie;
