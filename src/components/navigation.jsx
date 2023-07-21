import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { logout } from '../redux/slices/userSlice';
import { selectUser } from '../redux/store';
import '../styles/navigation.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);
  const { admin: isAdmin } = user ?? {};

  const closeNavbar = () => {
    setOpen(false);
  };

  const handleNavLinkClick = () => {
    if (open) {
      closeNavbar();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-group">
          <div className="nav-header flex-md-column">
            <button
              data-testid="navbar-toggler-button"
              className="navbar-toggler-button"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            {user && (
              <div className="user-name order-md-1">
                <h3 className="welcome mb-0 fw-bolder">
                  Welcome,
                  {' '}
                  {user.name}
                </h3>
              </div>
            )}
            <Link className="nav-logo d-flex justify-content-center" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div
            data-testid="navbar-collapse"
            className={`collapse navbar-collapse ${open ? 'show' : 'desktop-show'}`}
          >
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>
                  Home
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink className="nav-link" to="/reserve" onClick={handleNavLinkClick}>
                      Reserve
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/myReservations" onClick={handleNavLinkClick}>
                      My Reservations
                    </NavLink>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <NavLink className="nav-link" to="/add" onClick={handleNavLinkClick}>
                      Add
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/delete" onClick={handleNavLinkClick}>
                      Delete
                    </NavLink>
                  </li>
                </>
              )}
              {user ? (
                <li>
                  <button type="button" className="nav-link logout-button" onClick={handleLogout}>
                    Log out
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
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
