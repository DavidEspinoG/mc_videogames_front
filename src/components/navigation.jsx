import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';
import '../styles/navigation.scss';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  //   This isAdmin state will be fetched from Redux store but for now we will use useState
  //   const isAdmin = useSelector((state) => state.user.isAdmin);
  const isAdmin = false;

  const closeNavbar = () => {
    setOpen(false);
  };

  const handleNavLinkClick = () => {
    if (open) {
      closeNavbar();
    }
  };

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
          <div className={`collapse navbar-collapse ${open ? 'show' : 'desktop-show'}`}>
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/reserve" onClick={handleNavLinkClick}>Reserve</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/myReservations" onClick={handleNavLinkClick}>My Reservations</NavLink>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <NavLink className="nav-link" to="/add" onClick={handleNavLinkClick}>Add</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/delete" onClick={handleNavLinkClick}>Delete</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink className="nav-link" to="/login">Login</NavLink>
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
