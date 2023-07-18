import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    const url = `${BASE_URL}/users/sign_in`;
    const body = { user: { email, password } };
    const response = await axios.post(url, body).catch((error) => error);
    console.log([response.data, response.headers.authorization])
    if (response.status === 200) {
      return [response.data, response.headers.authorization];
    }

    return rejectWithValue(response.response.data.message);
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    jwt: '',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload[0].user;
        state.jwt = payload[1];
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
