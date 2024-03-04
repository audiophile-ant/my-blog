import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: 2
  },
  reducers: {
    changeMode: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;