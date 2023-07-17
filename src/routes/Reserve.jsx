import { BiArrowBack } from 'react-icons/bi';
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import '../styles/reserve.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import getTomorrowDate from '../utils/getTomorrowDate';

const Reserve = () => {
  const navigate = useNavigate();
  const mockData = useSelector((state) => state.videogames.all);
  const [days, setDays] = useState(0);
  const [selectedVideogameId, setSelectedVideogameId] = useState(0);
  const handleDateChange = (e) => {
    const now = new Date();
    const userDate = new Date(e.target.value);
    const difference = userDate.getTime() - now.getTime();
    const differenceDays = Math.ceil(difference / (1000 * 3600 * 24));
    setDays(differenceDays);
  };
  const handleVideogameChange = (e) => {
    setSelectedVideogameId(e.target.value);
  };
  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-header">
          <BiArrowBack className="back-icon" onClick={() => navigate('/')} />
        </div>
        <div className="login-form">
          <h3 className="subtitle text-center">RESERVE A VIDEOGAME </h3>
          <hr className="green-line" />
          <p>Select the videogame you want to rent and the date you want to return it</p>
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
              type="date"
              min={getTomorrowDate()}
              className="input"
              onChange={(e) => { handleDateChange(e); }}
            />
            <button
              type="button"
              className="login-submit-button"
              onClick={() => {
                navigate('/myReservations')
              }}
            >
              Submit
            </button>
          </div>
          {days ? (
            <p>
              *Your rent will last
              {days}
              {' '}
              days
            </p>
          ) : ''}

        </div>
      </div>
    </div>
  );
};

export default Reserve;
