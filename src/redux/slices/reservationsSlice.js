import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';
// TODO: Update to deployment URL

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const url = `${BASE_URL}/reservations`;
    const headers = { Accept: 'application/json', Authorization: state.user.jwt };
    const { status, data, message } = await axios.get(url, { headers }).catch((error) => error);

    if (status === 200) {
      return data;
    }

    return rejectWithValue(message);
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, { payload }) => {
        state.reservations = payload;
        state.error = null;
      })
      .addCase(getReservations.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default reservationsSlice.reducer;
