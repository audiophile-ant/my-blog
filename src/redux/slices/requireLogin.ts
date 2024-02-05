import { createSlice } from '@reduxjs/toolkit';

const requireLoginSlice = createSlice({
  name: 'requireLogin',
  initialState: {
    value: true
  },
  reducers: {
    require: state => {
      state.value = true;
    },
    visitor: state => {
      state.value = false;
    }
  }
});

export const { require, visitor } = requireLoginSlice.actions;

export default requireLoginSlice.reducer;