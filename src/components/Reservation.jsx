import PropTypes from 'prop-types';
import '../styles/reservation.scss';

const Reservation = ({ data }) => {
  const {
    days, total_price: totalPrice, created_at: createdAt, videogame,
  } = data;
  const { name, photo, description } = videogame;

  return (
    <article className="col">
      <div className="px-5 pb-4">
        <img className="img-fluid square-ratio rounded" src={photo} alt={name} />
      </div>
      <h3 className="h5 mb-4">{name}</h3>
      <p className="mb-0">
        Starting date:
        {' '}
        {createdAt}
      </p>
      <p className="mb-0">
        Days:
        {' '}
        {days}
      </p>
      <p className="mb-0">
        Total price:
        {' '}
        {totalPrice}
      </p>
      <p className="d-webkit-box clamp-3">{description}</p>
    </article>
  );
};

Reservation.propTypes = {
  data: PropTypes.shape({
    days: PropTypes.number,
    total_price: PropTypes.number,
    created_at: PropTypes.string,
    videogame: PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default Reservation;
