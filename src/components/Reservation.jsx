import PropTypes from 'prop-types';
import '../styles/carousel-item.scss';
import formatDate from '../utils/formatDate';
import formatToCurrency from '../utils/formatToCurrency';

const Reservation = ({ data }) => {
  const {
    days, total_price: totalPrice, created_at: createdAt, videogame,
  } = data;
  const { name, photo, description } = videogame;

  return (
    <article className="col">
      <div className="vh-25 mb-4">
        <img className="h-100 img-fluid rounded aspect-ratio-1" src={photo} alt={name} />
      </div>
      <h3 className="h6 fw-bolder text-uppercase mb-4">{name}</h3>
      <div className="text-muted small">
        <p className="mb-0">
          <span className="fw-bold">Starting date:</span>
          {' '}
          {formatDate(createdAt)}
        </p>
        <p className="mb-0">
          <span className="fw-bold">Finishing date:</span>
          {' '}
          {formatDate(createdAt, days)}
        </p>
        <p className="mb-0">
          <span className="fw-bold">Days:</span>
          {' '}
          {days}
        </p>
        <p className="mb-0">
          <span className="fw-bold">Total price:</span>
          {' '}
          {formatToCurrency(totalPrice)}
        </p>
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
    videogame: PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default Reservation;
