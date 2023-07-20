import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import Carousel from '../components/Carousel';
import Spinner from '../components/spinner';
import { getReservations } from '../redux/slices/reservationsSlice';
import { selectReservations, selectReservationsError } from '../redux/store';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(selectReservations);
  const error = useSelector(selectReservationsError);
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
    dispatch(getReservations());
  }, [dispatch]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!reservations) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <Spinner />
      </div>
    );
  }

  if (!reservations?.length) {
    return <h1>There are no reservations in your name</h1>;
  }

  const slicedItems = reservations.slice(page, page + itemsPerPage);
  const disabledLeft = page === 0;
  const disabledRight = page + itemsPerPage >= reservations.length;

  return (
    <div className="h-100 text-center d-flex flex-column justify-content-center">
      <h1 className="fw-bolder mb-5 pb-4 h2">MY RESERVATIONS</h1>
      <Carousel
        items={slicedItems}
        page={page}
        setPage={setPage}
        disabledLeft={disabledLeft}
        disabledRight={disabledRight}
      />
    </div>
  );
};

export default MyReservations;
