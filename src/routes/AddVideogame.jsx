import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../redux/constants';
import '../styles/AddVideogame.scss';

const AddVideogame = () => {
  const jwt = useSelector((state) => state.user.jwt);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const fetchVideogame = async () => {
    const apiUrl = `${BASE_URL}/videogames`;
    const body = {
      name, photo: url, description, price_per_day: price,
    };
    const headers = {
      headers: {
        Authorization: jwt,
      },
    };
    const res = await axios.post(apiUrl, body, headers);
    return res;
  };
  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">ADD A VIDEOGAME</h3>
          <hr className="green-line" />
          <p>Add a videogame available for rent</p>
          <form onSubmit={async (e) => {
            e.preventDefault();
            await fetchVideogame();
            navigate('/');
          }}
          >
            <div className="login-inputs">
              <input
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input"
                placeholder="Name"
                required
              />
              <input
                value={url}
                type="text"
                className="input"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Image url"
                required
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="input"
                placeholder="Description"
                required
              />
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min={0}
                type="number"
                className="input"
                placeholder="Price per day"
                required
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="login-submit-button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVideogame;
