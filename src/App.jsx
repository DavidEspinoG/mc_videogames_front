import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { setLocalStorageUserData } from './redux/slices/userSlice';
import { clearDetails } from './redux/slices/videogamesSlice';
import { selectUser } from './redux/store';
import AddVideogame from './routes/AddVideogame';
import DeleteVideogame from './routes/DeleteVideogame';
import Details from './routes/Details';
import Home from './routes/Home';
import Login from './routes/Login';
import MyReservations from './routes/MyReservations';
import NotFound from './routes/NotFound';
import Reserve from './routes/Reserve';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!location.pathname.startsWith('/details/')) {
      dispatch(clearDetails());
    }
    dispatch(setLocalStorageUserData());
  }, [dispatch, location.pathname]);

  if (user === undefined) {
    return null;
  }

  return (
    <>
      {location.pathname !== '/login' && <Navigation />}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route element={<ProtectedRoute isAllowed={!user} />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/myReservations" element={<MyReservations />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={Boolean(user?.admin)} />}>
            <Route path="/add" element={<AddVideogame />} />
            <Route path="/delete" element={<DeleteVideogame />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
