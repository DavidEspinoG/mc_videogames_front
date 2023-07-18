import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

const getDetails = createAsyncThunk('videogames/getDetails', async (id, { getState }) => {
  try {
    const state = getState();
    const response = await axios.get(`${BASE_URL}/videogames/${id}`, {
      headers: {
        Authorization: state.user.jwt,
      },
    });
    return await response.data;
  } catch (error) {
    return error;
  }
});

export const getVideogames = createAsyncThunk(
  'videogames/getVideogames',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const url = `${BASE_URL}/videogames`;
    const headers = { Accept: 'application/json', Authorization: state.user.jwt };
    const { status, data, message } = await axios.get(url, { headers }).catch((error) => error);

    if (status === 200) {
      return data;
    }

    return rejectWithValue(message);
  },
);

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
    error: null,
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, { payload }) => {
      if (payload.name !== 'AxiosError') {
        state.details = payload;
      }
    },
    [getDetails.rejected]: (state, action) => {
      state.details = action.payload;
    },
    [getDetails.pending]: (state, action) => {
      state.details = action.payload;
    },
    [getVideogames.fulfilled]: (state, { payload }) => {
      state.all = payload;
      state.error = null;
    },
    [getVideogames.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default videogamesSlice.reducer;
export { getDetails };
