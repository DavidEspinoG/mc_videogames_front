import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';
import '../styles/navigation.scss';

const Navigation = () => {
  const [open, setOpen] = useState(true);

  //   This isAdmin state will be fetched from Redux store but for now we will use useState
  //   const isAdmin = useSelector((state) => state.user.isAdmin);
  const isAdmin = false;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-group">
          <div className="nav-header">
            <button className="navbar-toggler-button" type="button" onClick={() => setOpen(!open)}>
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="nav-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/reserve">Reserve</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/myReservations">My Reservations</NavLink>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <NavLink className="nav-link" activeClassName="active" to="/add">Add</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" activeClassName="active" to="/delete">Delete</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="credits">
          <small> &copy; 2023 - All rights reserved</small>
        </div>
      </div>
    </nav>

  );
};

export default Navigation;
