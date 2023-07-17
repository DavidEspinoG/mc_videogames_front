import { createSlice } from '@reduxjs/toolkit';

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
    details: {},
  },
});

export default videogamesSlice.reducer;
