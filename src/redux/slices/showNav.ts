import { createSlice } from '@reduxjs/toolkit';

const showNavSlice = createSlice({
  name: 'showNav',
  initialState: {
    value: true
  },
  reducers: {
    changShow: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changShow } = showNavSlice.actions;

export default showNavSlice.reducer;