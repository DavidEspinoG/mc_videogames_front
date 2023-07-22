import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../constants';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    const url = `${BASE_URL}/users/sign_in`;
    const data = { headers: { Accept: 'application/json' }, user: { email, password } };
    const response = await axios.post(url, data).catch((error) => error);

    if (response.status === 200) {
      return [response.data, response.headers.authorization];
    }

    return rejectWithValue(response.response.data.message);
  },
);

export const signin = createAsyncThunk(
  'user/signin',
  async ({ name, email, password, password_confirmation, address }, { rejectWithValue }) => {
    const url = `${BASE_URL}/users`;
    const data = { headers: { Accept: 'application/json' }, user: { 
      name, email, password, password_confirmation, address 
    }};
    const response = await axios.post(url, data).catch((error) => error);

    if (response.status === 200) {
      return [response.data, response.headers.authorization];
    }

    return rejectWithValue(response.response.data.message);
  },
);

export const logout = createAsyncThunk('user/logout', async (_, { getState }) => {
  const state = getState();
  const url = `${BASE_URL}/users/sign_out`;
  const headers = { Accept: 'application/json', Authorization: state.user.jwt };
  const response = await axios.delete(url, { headers }).catch((error) => error);

  if (response.status === 200) {
    return response.data;
  }

  return response.message;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setLocalStorageUserData: (state) => {
      const localStorageUserData = localStorage.getItem('user');
      if (localStorageUserData) {
        const [userData, jwt] = JSON.parse(localStorageUserData);
        state.user = userData.user;
        state.jwt = jwt;
      } else {
        state.user = null;
      }
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem('user', JSON.stringify(payload));
      const [userData, jwt] = payload;
      state.user = userData.user;
      state.jwt = jwt;
      state.loginLoading = false;
      state.loginError = null;
    },
    [login.pending]: (state) => {
      state.loginLoading = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loginLoading = false;
      state.loginError = payload;
    },
    [logout.fulfilled]: (state) => {
      localStorage.removeItem('user');
      state.user = null;
      state.jwt = null;
      state.logoutError = null;
    },
    [logout.rejected]: (state, { payload }) => {
      state.logoutError = payload;
    },
    [signin.fulfilled]: (state, { payload }) => {
      localStorage.setItem('user', JSON.stringify(payload));
      const [userData, jwt] = payload;
      state.user = userData.user;
      state.jwt = jwt;
      state.signinLoading = false;
      state.signinError = null;
    },
    [signin.pending]: (state) => {
      state.signinLoading = true;
    },
    [signin.rejected]: (state, { payload }) => {
      state.signinLoading = false;
      state.signinError = payload;
    },
  },
});

export const { setLocalStorageUserData } = userSlice.actions;

export default userSlice.reducer;
