import { configureStore } from '@reduxjs/toolkit';
import reservationsSliceReducer from './slices/reservationsSlice';
import userSliceReducer from './slices/userSlice';
import videogamesSliceReducer from './slices/videogamesSlice';

const store = configureStore({
  reducer: {
    videogames: videogamesSliceReducer,
    user: userSliceReducer,
    reservations: reservationsSliceReducer,
  },
});

export const selectReservations = (state) => state.reservations.reservations;
export const selectReservationsError = (state) => state.reservations.error;
export const selectVideogames = (state) => state.videogames.videogames;
export const selectVideogamesError = (state) => state.videogames.error;

export default store;
