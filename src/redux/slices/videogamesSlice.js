import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

const getDetails = createAsyncThunk('videogames/getDetails', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const response = await axios.get(`${BASE_URL}/videogames/${id}`, {
    headers: {
      Authorization: state.user.jwt,
    },
  }).catch((error) => error);

  if (response.status === 200) {
    return response.data;
  }

  return rejectWithValue(response.message);
});

const deleteVideogame = createAsyncThunk('videogames/delete', async (id, { getState }) => {
  try {
    const state = getState();
    const response = await axios.delete(`${BASE_URL}/videogames/${id}`, {
      headers: {
        Authorization: state.user.jwt,
      },
    });
    return [response.data, id];
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
    all: null,
    details: null,
    message: null,
    error: null,
  },
  reducers: {
    clearDetails: (state) => {
      state.details = null;
    },
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, { payload }) => {
      state.details = payload;
    },
    [getDetails.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getVideogames.fulfilled]: (state, { payload }) => {
      state.all = payload;
      state.loading = false;
    },
    [getVideogames.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [deleteVideogame.fulfilled]: (state, { payload }) => {
      const [data, id] = payload;
      state.all = state.all.filter((videogame) => videogame.id !== id);
      state.message = data.message;
      state.error = null;
    },
    [deleteVideogame.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { clearDetails } = videogamesSlice.actions;
export default videogamesSlice.reducer;
export { deleteVideogame, getDetails };
