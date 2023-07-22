import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Signin.scss';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { signin } from '../redux/slices/userSlice';
import { getVideogames } from '../redux/slices/videogamesSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [address, setAddress] = useState('');
  const videogames = useSelector((state) => state.videogames.all);
  const signinLoading = useSelector((state) => state.user.signinLoading);
  const signinError = useSelector((state) => state.user.signinError);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin({
      name,
      email,
      password,
      passwordConfirmation,
      address,
    }));
  };
  useEffect(() => {
    if (!videogames) {
      dispatch(getVideogames());
    }
  });
  return (
    <div className="signin-main-container">
      <div className="signin-header">
        <BiArrowBack className="back-icon" onClick={() => navigate('/')} />
      </div>
      <h3 className="subtitle text-center">SIGN IN</h3>
      <div className="line-center">
        <hr className="green-line" />
      </div>
      <form
        onSubmit={handleSubmit}
      >
        <div className="signin-inputs">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="input"
            type="text"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input"
            type="password"
          />
        </div>
        <div className="signin-inputs">
          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Confirm your password"
            className="input"
            type="password"
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="input"
            type="text"
          />
        </div>
        <div className="signin-inputs">
          <button
            type="submit"
            className="login-submit-button"
          >
            {signinLoading ? <div className="spinner-border" /> : 'Submit'}
          </button>
        </div>
      </form>
      {signinError && (
      <small>
        *
        {' '}
        {signinError}
        {' '}
        *
      </small>
      )}
    </div>
  );
};

export default SignIn;
