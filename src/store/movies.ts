import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IPayload {
  "now-playing"?: ICatagreeResponse;
  "popular"?: ICatagreeResponse;
  "top-rated"?: ICatagreeResponse;
  "upcoming"?: ICatagreeResponse;
}
export type IMovieKeys = keyof IPayload;
export interface IMovies {
  "now_playing": ICatagreeResponse;
  "popular": ICatagreeResponse;
  "top_rated": ICatagreeResponse;
  "upcoming": ICatagreeResponse;
}
const shampleMovieData = {
    page: 1,
  results: [],
  total_pages: 0,
  total_results: 0
}

const initialState: IMovies = {
  "now_playing": shampleMovieData,
  "popular": shampleMovieData,
  "top_rated": shampleMovieData,
  "upcoming": shampleMovieData,
};

export interface ICatagreeResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //  movies/setMovies
    setMovies: (movies: IMovies, action: PayloadAction<IPayload>) => {
      return {
        ...movies,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
