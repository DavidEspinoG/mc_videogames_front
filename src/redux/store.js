import { configureStore } from '@reduxjs/toolkit';
import reservationsSliceReducer from './slices/reservationsSlice';
import userSliceReducer from './slices/userSlice';
import videogamesSliceReducer from './slices/videogamesSlice';

const reducer = {
  videogames: videogamesSliceReducer,
  user: userSliceReducer,
  reservations: reservationsSliceReducer,
};

const setupStore = (preloadedState) => configureStore({
  preloadedState,
  reducer,
});

export const selectJWT = (state) => state.user.jwt;
export const selectUser = (state) => state.user.user;
export const selectUserLoginLoading = (state) => state.user.loginLoading;
export const selectUserLoginError = (state) => state.user.loginError;
export const selectUserLogoutError = (state) => state.user.logoutError;
export const selectVideogames = (state) => state.videogames.all;
export const selectVideogamesError = (state) => state.videogames.allError;
export const selectVideogameDetails = (state) => state.videogames.details;
export const selectVideogameDetailsError = (state) => state.videogames.detailsError;
export const selectVideogameDeleteMessage = (state) => state.videogames.deleteMessage;
export const selectVideogameDeleteError = (state) => state.videogames.deleteError;
export const selectReservations = (state) => state.reservations.reservations;
export const selectReservationsError = (state) => state.reservations.error;

export default setupStore;
