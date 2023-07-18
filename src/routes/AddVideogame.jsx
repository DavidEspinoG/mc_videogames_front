import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BASE_URL from '../redux/constants';

const AddVideogame = () => {
  const jwt = useSelector((state) => state.user.jwt);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const fetchVideogame = async () => {
    const apiUrl = `${BASE_URL}/videogames`;
    const body = {
      name, url, description, price,
    };
    const headers = {
      headers: {
        Authorization: jwt,
      },
    };
    const res = await axios.post(apiUrl, body, headers);
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">ADD A VIDEOGAME</h3>
          <hr className="green-line" />
          <p>Add a videogame available for rent</p>
          <div className="login-inputs">
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input"
              placeholder="Name"
            />
            <input
              value={url}
              type="text"
              className="input"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Image url"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="input"
              placeholder="Description"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min={0}
              type="number"
              className="input"
              placeholder="Price per day"
            />
          </div>
          <button
            type="button"
            className="login-submit-button"
            onClick={() => fetchVideogame()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVideogame;
