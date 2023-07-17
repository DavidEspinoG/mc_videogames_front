import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const getDetails = createAsyncThunk('videogames/getDetails', async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/videogames/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const videogamesSlice = createSlice({
  name: 'videogames',
  initialState: {
    all: [
      {
        id: 1,
        name: 'Zelda: Breath of the wild',
        photo: 'http://fakeurl.com',
        description: 'A very interesting game',
        price_per_day: 20,
      },
      {
        id: 2,
        name: 'Hogwarts Legacy',
        photo: 'http://fakeurl.com',
        description: 'A very interesting game',
        price_per_day: 30,
      },
      {
        id: 3,
        name: 'God of war',
        photo: 'http://fakeurl.com',
        description: 'A very interesting game',
        price_per_day: 35,
      },
    ],
    details: {
      id: 1,
      name: 'Super Mario Bros',
      photo: 'https://cdn.mobygames.com/covers/4039218-super-mario-bros-nes-front-cover.jpg',
      description: 'Super Mario Bros is a platform game developed and published by Nintendo. The successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series, it was first released in 1985 for the Famicom in Japan.',
      pricePerDay: 5,
    },
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => {
      state.details = action.payload;
    },
    [getDetails.rejected]: (state, action) => {
      state.details = action.payload;
    },
    [getDetails.pending]: (state, action) => {
      state.details = action.payload;
    },
  },
});

export default videogamesSlice.reducer;
export { getDetails };
