import { createSlice } from '@reduxjs/toolkit';

const timeOfDaySlice = createSlice({
  name: 'timeOfDay',
  initialState: {
    value: 'dark'
  },
  reducers: {
    getTime: (state) => {
      const now = new Date();
      const hours = now.getHours();
    
      if (hours < 12 && hours >= 8) {
        state.value = 'am';
      } else if (hours < 18 && hours >= 12) {
        state.value = 'pm';
      } else {
        state.value = 'dark';
      }
    },
    setTime: (state, action) => {
      switch (action.payload) {
        case 0: state.value = 'am'; break;
        case 1: state.value = 'pm'; break;
        case 2: state.value = 'dark'; break;
        default: state.value = 'dark'; break;
      }
    }
  }
});

export const { getTime, setTime } = timeOfDaySlice.actions;

export default timeOfDaySlice.reducer;