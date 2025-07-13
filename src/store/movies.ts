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

export interface IMovies {
  nowPlaying: IMovie[];
}

const initialState: IMovies = {
  nowPlaying: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action: PayloadAction<IMovies>) => {
      state.nowPlaying = action.payload.nowPlaying;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
