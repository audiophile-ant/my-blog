import { createSlice } from '@reduxjs/toolkit';

const timeSwtichSlice = createSlice({
  name: 'timeSwitch',
  initialState: {
    value: false
  },
  reducers: {
    getStatues: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { getStatues } = timeSwtichSlice.actions;

export default timeSwtichSlice.reducer;