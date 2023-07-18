import '../styles/NotFound.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });
  return (
    <div className="login-main-container">
      <div className="notfound-container">
        <h2 className="notfound-title">The page you&apos;re looking for does not exist</h2>
        <p className="redirecting">Redirecting to home..</p>
      </div>
    </div>
  );
};

export default NotFound;
