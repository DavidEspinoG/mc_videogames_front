import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import AddVideogame from './routes/AddVideogame';
import DeleteVideogame from './routes/DeleteVideogame';
import Details from './routes/Details';
import Home from './routes/Home';
import Login from './routes/Login';
import MyReservations from './routes/MyReservations';
import NotFound from './routes/NotFound';
import Reserve from './routes/Reserve';

const App = () => (
  <Router>
    <Navigation />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/myReservations" element={<MyReservations />} />
        <Route path="/add" element={<AddVideogame />} />
        <Route path="/delete" element={<DeleteVideogame />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Router>
);

export default App;
