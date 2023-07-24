import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import Carousel from '../components/Carousel';
import Spinner from '../components/spinner';
import { getVideogames } from '../redux/slices/videogamesSlice';
import { selectVideogames, selectVideogamesError } from '../redux/store';

const Home = ({ deleteButton, message }) => {
  const dispatch = useDispatch();
  const videogames = useSelector(selectVideogames);
  const error = useSelector(selectVideogamesError);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1200px)');
  const [page, setPage] = useState(0);

  let itemsPerPage = 1;

  if (isLargeDesktop) {
    itemsPerPage = 3;
  } else if (isDesktop) {
    itemsPerPage = 2;
  }

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  if (!videogames) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <Spinner />
      </div>
    );
  }

  if (!videogames.length) {
    return <h1 className="text-center">There are no videogames available</h1>;
  }

  const slicedItems = videogames.slice(page, page + itemsPerPage);
  const disabledLeft = page === 0;
  const disabledRight = page + itemsPerPage >= videogames.length;

  return (
    <div className="h-100 text-center d-flex flex-column justify-content-center">
      <h1 className="h2 fw-bolder mb-0">LATEST VIDEOGAMES</h1>
      <small className="text-muted fw-bold mb-5 pb-4">Please select a videogame</small>
      <Carousel
        items={slicedItems}
        page={page}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
        deleteButton={deleteButton}
      />
      {message && (
      <small className="mt-5 fw-bold">
        *
        {' '}
        {message}
        {' '}
        *
      </small>
      )}
    </div>
  );
};

Home.propTypes = {
  deleteButton: PropTypes.bool,
  message: PropTypes.string,
};

Home.defaultProps = {
  deleteButton: false,
  message: '',
};

export default Home;
