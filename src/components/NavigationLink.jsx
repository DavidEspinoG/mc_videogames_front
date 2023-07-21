import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../redux/store';

const NavigationLink = ({ label, path, action }) => {
  const user = useSelector(selectUser);
  const { admin: isAdmin } = user ?? {};

  // Validate if the user is admin to display Add and Delete links
  if ((label === 'Add' || label === 'Delete') && !isAdmin) return null;

  // Validate if the user is not logged in to display just Home and Login links
  if ((label !== 'Home' && label !== 'Login') && !user) return null;

  if (label === 'Login' && user) return null;

  return (
    <li>
      <NavLink className="nav-link" to={path} onClick={action}>
        {label}
      </NavLink>
    </li>
  );
};

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default NavigationLink;
