import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/slices/userSlice';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [address, setAddress] = useState('');
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

  return (
    <div className="login-main-container">
      <div className="container">
        <div className="login-form">
          <h3 className="subtitle text-center">SIGN IN</h3>
          <hr className="green-line" />
          <form
            onSubmit={handleSubmit}
            className="login-inputs"
          >
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
            <input
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Confirm your password"
              className="input"
              type="text"
            />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="input"
              type="text"
            />
            <button
              type="submit"
              className="login-submit-button"
            >
              {signinLoading ? <div className="spinner-border" /> : 'Submit'}
            </button>
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
      </div>
    </div>
  );
};

export default SignIn;
