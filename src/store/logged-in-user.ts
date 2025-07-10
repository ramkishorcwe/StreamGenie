import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser{
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}
export interface IAuthState {
  user: IUser | null;
}

const initialState:IAuthState = {
    user: null,

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      login: (state, action: PayloadAction<IAuthState>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer