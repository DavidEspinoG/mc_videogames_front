import PropTypes from 'prop-types';
import '../styles/carousel-item.scss';

const Videogame = ({ data }) => {
  const { name, photo, description } = data;

  return (
    <article className="col">
      <div className="vh-25 mb-4">
        <img className="h-100 img-fluid rounded" src={photo} alt={name} />
      </div>
      <h3 className="h6 fw-bolder text-uppercase mb-4">{name}</h3>
      <div className="text-muted small">
        <p className="d-webkit-box clamp-3">{description}</p>
      </div>
    </article>
  );
};

Videogame.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Videogame;
