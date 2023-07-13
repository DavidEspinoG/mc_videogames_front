import { configureStore } from '@reduxjs/toolkit';
import videogamesSliceReducer from './slices/videogamesSlice';
import userSliceReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    videogames: videogamesSliceReducer,
    user: userSliceReducer,
  },
});

export default store;
