import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInputs from '../components/LoginInputs';
import { createVideogame } from '../redux/slices/videogamesSlice';
import { selectJWT } from '../redux/store';
import '../styles/AddVideogame.scss';

const AddVideogame = () => {
  const navigate = useNavigate();
  const jwt = useSelector(selectJWT);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const inputs = [
    {
      id: 0, placeholder: 'Name', type: 'text', value: name, action: setName,
    },
    {
      id: 1, placeholder: 'Image URL', type: 'text', value: url, action: setUrl,
    },
    {
      id: 2, placeholder: 'Description', type: 'text', value: description, action: setDescription,
    },
    {
      id: 3, placeholder: 'Price per day', type: 'number', value: price, action: setPrice,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createVideogame(name, url, description, price, jwt);
    navigate('/');
  };

  return (
    <div className="reserve-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">ADD A VIDEOGAME</h3>
          <hr className="green-line" />
          <p>Add a videogame available for rent</p>
          <form onSubmit={handleSubmit}>
            <div className="login-inputs">
              {inputs.map((input) => (
                <LoginInputs
                  key={input.id}
                  value={input.value}
                  type={input.type}
                  action={(e) => input.action(e.target.value)}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
            <div className="button-container">
              <button type="submit" className="login-submit-button">
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
