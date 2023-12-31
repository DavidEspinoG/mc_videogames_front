import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import { fetchReservation } from '../redux/slices/reservationsSlice';
import { getVideogames } from '../redux/slices/videogamesSlice';
import { selectJWT, selectReservationsError, selectVideogames } from '../redux/store';
import '../styles/Login.scss';
import '../styles/Reserve.scss';
import getTomorrowDate from '../utils/getTomorrowDate';

const Reserve = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videogames = useSelector(selectVideogames);
  const jwt = useSelector(selectJWT);
  const error = useSelector(selectReservationsError);
  const [searchParams] = useSearchParams();
  const videogameId = searchParams.get('videogameId');
  const [selectedVideogameId, setSelectedVideogameId] = useState(videogameId || 0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (!videogames) {
      dispatch(getVideogames());
    }
  }, [dispatch, videogames]);

  // Handlers
  const handleDateChange = (e) => {
    const now = new Date();
    const userDate = new Date(e.target.value);
    const difference = userDate.getTime() - now.getTime();
    const differenceDays = Math.ceil(difference / (1000 * 3600 * 24));
    setDays(differenceDays);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchReservation(selectedVideogameId, days, jwt);
    navigate('/myReservations');
  };

  const handleVideogameChange = (e) => {
    setSelectedVideogameId(e.target.value);
  };

  // Render
  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  if (!videogames) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">RESERVE A VIDEOGAME</h3>
          <hr className="green-line" />
          <p>Select the videogame you want to rent and the date you want to return it</p>
          <form onSubmit={handleSubmit}>
            <div className="login-inputs">
              <select
                className="reserve-select"
                value={selectedVideogameId}
                onChange={handleVideogameChange}
                min={1}
              >
                <option value={0}>-- Select a videogame --</option>
                {videogames?.map((element) => (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                ))}
              </select>
              <input
                required
                type="date"
                min={getTomorrowDate()}
                className="input"
                onChange={handleDateChange}
              />
              <button type="submit" className="login-submit-button">
                Submit
              </button>
            </div>
          </form>
          {days ? (
            <p>
              * Your rent will last
              {' '}
              {days}
              {' '}
              days *
            </p>
          ) : ''}
        </div>
      </div>
    </div>
  );
};

export default Reserve;
