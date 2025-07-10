import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILoading {
  status: boolean
}

const initialState: ILoading = {
  status: false
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.status =  !state.status
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
