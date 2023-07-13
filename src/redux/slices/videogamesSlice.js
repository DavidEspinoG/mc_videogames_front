import { createSlice } from '@reduxjs/toolkit';

const videogamesSlice = createSlice({
  name: 'videogames',
  initialState: {
    all: [],
    details: {},
  },
});

export default videogamesSlice.reducer;
