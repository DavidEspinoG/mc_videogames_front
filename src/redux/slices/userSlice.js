import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    const url = `${BASE_URL}/users/sign_in`;
    const body = { user: { email, password } };
    const response = await axios.post(url, body).catch((error) => error);

    if (response.status === 200) {
      return [response.data, response.headers.authorization];
    }

    return rejectWithValue(response.response.data.message);
  },
);

export const logout = createAsyncThunk('user/logout', async (_, { getState }) => {
  const state = getState();
  const url = `${BASE_URL}/users/sign_out`;
  const headers = { Authorization: state.user.jwt };
  const response = await axios.delete(url, { headers }).catch((error) => error);

  if (response.status === 200) {
    return response.data;
  }

  return response.message;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    jwt: '',
    error: null,
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      const [userData, jwt] = payload;
      state.user = userData.user;
      state.jwt = jwt;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.jwt = '';
      state.error = null;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
    },

  },
});

export default userSlice.reducer;
