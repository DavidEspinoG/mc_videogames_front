import PropTypes from 'prop-types';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import '../styles/carousel.scss';
import Reservation from './Reservation';

const Carousel = ({
  items, setPage, disabledLeft, disabledRight,
}) => {
  const handleLeftClick = () => {
    setPage((page) => page - 1);
  };

  const handleRightClick = () => {
    setPage((page) => page + 1);
  };

  return (
    <section id="carousel" className="row mx-0 g-0">
      <div className="col-auto d-flex flex-column justify-content-center">
        <button type="button" className="btn" onClick={handleLeftClick} disabled={disabledLeft}>
          <BsCaretLeft />
        </button>
      </div>
      <div className="col row row-cols-1 row-cols-md-2 row-cols-xl-3">
        {items.map((item) => {
          const { id } = item;

          return (
            <Reservation key={id} data={item} />
          );
        })}
      </div>
      <div className="col-auto d-flex flex-column justify-content-center">
        <button type="button" className="btn" onClick={handleRightClick} disabled={disabledRight}>
          <BsCaretRight />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(Reservation.propTypes.data).isRequired,
  setPage: PropTypes.func.isRequired,
  disabledLeft: PropTypes.bool.isRequired,
  disabledRight: PropTypes.bool.isRequired,
};

export default Carousel;
