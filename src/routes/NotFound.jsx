import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeoutID);
  });

  return (
    <div className="login-main-container">
      <div className="notfound-container container">
        <h2 className="notfound-title">The page you&apos;re looking for does not exist</h2>
        <p className="redirecting">Redirecting to home..</p>
      </div>
    </div>
  );
};

export default NotFound;
