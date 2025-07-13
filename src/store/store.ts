import { configureStore } from '@reduxjs/toolkit'
import userSlice, { type IAuthState } from './logged-in-user'
import errorSlice, { type IError } from './error';
import  loadingSlice, { type ILoading } from './loading';
import  moviesSlice, { type IMovies } from './movies';moviesSlice

export interface IStore{
  user: IAuthState;
  error: IError;
  loading: ILoading;
  movies: IMovies;
}

export const store = configureStore({
  reducer: {
    user: userSlice,
    error: errorSlice,
    loading: loadingSlice,
    movies: moviesSlice
},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch