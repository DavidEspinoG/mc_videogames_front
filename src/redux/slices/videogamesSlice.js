import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

export const getDetails = createAsyncThunk(
  'videogames/getDetails',
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const response = await axios
      .get(`${BASE_URL}/videogames/${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: state.user.jwt,
        },
      })
      .catch((error) => error);

    if (response.status === 200) {
      return response.data;
    }

    return rejectWithValue(response.message);
  },
);

export const createVideogame = async (name, url, description, price, jwt) => {
  const apiUrl = `${BASE_URL}/videogames`;
  const body = {
    name,
    photo: url,
    description,
    price_per_day: price,
  };
  const headers = {
    headers: {
      Authorization: jwt,
    },
  };
  const res = await axios.post(apiUrl, body, headers);
  return res;
};

export const deleteVideogame = createAsyncThunk(
  'videogames/delete',
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const response = await axios
      .delete(`${BASE_URL}/videogames/${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: state.user.jwt,
        },
      })
      .catch((error) => error);

    if (response.status === 200) {
      return [response.data, id];
    }

    return rejectWithValue(response.message);
  },
);

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
  initialState: {},
  reducers: {
    clearDetails: (state) => {
      state.details = null;
    },
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, { payload }) => {
      state.details = payload;
      state.detailsError = null;
    },
    [getDetails.rejected]: (state, action) => {
      state.detailsError = action.payload;
    },
    [deleteVideogame.fulfilled]: (state, { payload }) => {
      const [data, id] = payload;
      state.all = state.all.filter((videogame) => videogame.id !== id);
      state.message = data.message;
      state.error = null;
    },
    [deleteVideogame.rejected]: (state, { payload }) => {
      state.deleteError = payload;
    },
    [getVideogames.fulfilled]: (state, { payload }) => {
      state.all = payload;
      state.allError = null;
    },
    [getVideogames.rejected]: (state, { payload }) => {
      state.allError = payload;
    },
  },
});

export const { clearDetails } = videogamesSlice.actions;
export default videogamesSlice.reducer;
