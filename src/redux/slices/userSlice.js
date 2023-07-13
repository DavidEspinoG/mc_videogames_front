import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    jwt: '',
    isAdmin: false,
  },
});

export default userSlice.reducer;
