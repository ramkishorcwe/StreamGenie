import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IError{
    code: number | null;
    message: string | null;
    componant: string | null;
}

const initialState:IError = {
      code: null,
    message: null,
    componant: null

}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
       setError: (state, action: PayloadAction<IError>) => {
      state.code = action.payload.code;
      state.message = action.payload.message;
      state.componant = action.payload.componant;
    },
    resetError: (state) => {
      state.code = null;
      state.message = null;
      state.componant = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setError, resetError } = errorSlice.actions

export default errorSlice.reducer