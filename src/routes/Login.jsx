import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { selectUserLoginError, selectUserLoginLoading } from '../redux/store';
import '../styles/Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginLoading = useSelector(selectUserLoginLoading);
  const loginError = useSelector(selectUserLoginError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="login-main-container">
      <div className="container">
        <div className="login-header">
          <BiArrowBack className="back-icon" onClick={() => navigate('/')} />
        </div>
        <div className="login-form">
          <h3 className="subtitle text-center">LOGIN</h3>
          <hr className="green-line" />
          <form className="login-inputs" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button type="submit" className="login-submit-button">
              {loginLoading ? <div className="spinner-border" /> : 'Submit'}
            </button>
          </form>
          {loginError && (
          <small>
            *
            {' '}
            {loginError}
            {' '}
            *
          </small>
          )}
          <div>
            <span>Don&apos;t have an account? </span>
            <Link to="/signin" className="underline">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
