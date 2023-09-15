import { createSlice } from '@reduxjs/toolkit'

const initialState = false;
export const createBlockSlice = createSlice({
  name: 'createBlock',
  initialState:{
    isShown: initialState,
  },
  reducers: {
    show: (state) => {
       state.isShown = true; // 直接修改 state
    },
    close: (state) => {
       state.isShown = false; // 直接修改 state
    },
  },
})

export const { show, close } = createBlockSlice.actions

export default createBlockSlice.reducer;
