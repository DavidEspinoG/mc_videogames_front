import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import '../styles/reserve.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getTomorrowDate from '../utils/getTomorrowDate';
import BASE_URL from '../redux/constants';
import { getVideogames } from '../redux/slices/videogamesSlice';

const Reserve = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  const navigate = useNavigate();
  const mockData = useSelector((state) => state.videogames.all);
  const [days, setDays] = useState(0);
  const [selectedVideogameId, setSelectedVideogameId] = useState(0);
  const jwt = useSelector((state) => state.user.jwt);
  const handleDateChange = (e) => {
    const now = new Date();
    const userDate = new Date(e.target.value);
    const difference = userDate.getTime() - now.getTime();
    const differenceDays = Math.ceil(difference / (1000 * 3600 * 24));
    setDays(differenceDays);
  };
  const fetchReservation = async () => {
    const url = `${BASE_URL}/reservations`;
    const body = { videogame_id: selectedVideogameId, days };
    const headers = {
      headers: {
        Authorization: jwt,
      },
    };
    const data = await axios.post(url, body, headers);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchReservation();
    navigate('/myReservations');
  };
  const handleVideogameChange = (e) => {
    setSelectedVideogameId(e.target.value);
  };
  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">RESERVE A VIDEOGAME </h3>
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
                {mockData.map((element) => (
                  <option key={element.id} value={element.id}>{element.name}</option>))}
              </select>
              <input
                required
                type="date"
                min={getTomorrowDate()}
                className="input"
                onChange={(e) => { handleDateChange(e); }}
              />
              <button
                type="submit"
                className="login-submit-button"
              >
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
