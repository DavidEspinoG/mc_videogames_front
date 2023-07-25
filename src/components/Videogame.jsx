import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteVideogame } from '../redux/slices/videogamesSlice';
import '../styles/carousel-item.scss';

const Videogame = ({ data, deleteButton }) => {
  const {
    id, name, photo, description,
  } = data;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteVideogame(id));
  };

  return (
    <article className="col h-100 d-flex flex-column">
      <Link key={id} to={`/details/${id}`}>
        <div className="vh-25 mb-4">
          <img className="h-100 img-fluid rounded aspect-ratio-1" src={photo} alt={name} />
        </div>
        <h3 className="h6 fw-bolder text-uppercase mb-4">{name}</h3>
      </Link>
      <div className="text-muted small">
        <p className="d-webkit-box clamp-3">{description}</p>
      </div>
      {deleteButton && (
        <div className="mt-auto">
          <button type="button" className="btn-delete" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </article>
  );
};

Videogame.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  deleteButton: PropTypes.bool,
};

Videogame.defaultProps = {
  deleteButton: false,
};

export default Videogame;
