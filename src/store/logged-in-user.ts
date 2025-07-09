import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser{
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}
export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState:IAuthState = {
    user: null,
    loading: false,
    error: null

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthState>) => {
    state = action.payload
    },
    logout: (state) => {
        state=initialState;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer