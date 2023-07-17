import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    jwt: '',
  },
});

export default userSlice.reducer;
