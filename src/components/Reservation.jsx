import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/carousel-item.scss';
import formatDate from '../utils/formatDate';
import formatToCurrency from '../utils/formatToCurrency';
import ReservationDetails from './ReservationDetails';
import Videogame from './Videogame';

const Reservation = ({ data }) => {
  const {
    days, total_price: totalPrice, created_at: createdAt, videogame,
  } = data;
  const {
    id, name, photo, description,
  } = videogame;

  return (
    <article className="col">
      <Link key={id} to={`/details/${id}`}>
        <div className="vh-25 mb-4">
          <img className="h-100 img-fluid rounded aspect-ratio-1" src={photo} alt={name} />
        </div>
        <h3 className="h6 fw-bolder text-uppercase mb-4">{name}</h3>
      </Link>
      <div className="text-muted small">
        <ReservationDetails label="Starting date" value={formatDate(createdAt)} />
        <ReservationDetails label="Finishing date" value={formatDate(createdAt, days)} />
        <ReservationDetails label="Days" value={days} />
        <ReservationDetails label="Total price" value={formatToCurrency(totalPrice)} />
        <p className="d-webkit-box clamp-3">{description}</p>
      </div>
    </article>
  );
};

Reservation.propTypes = {
  data: PropTypes.shape({
    days: PropTypes.number,
    total_price: PropTypes.string,
    created_at: PropTypes.string,
    videogame: PropTypes.oneOfType([Videogame.propTypes.data]),
  }).isRequired,
};

export default Reservation;
