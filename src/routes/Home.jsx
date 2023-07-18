import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import Carousel from '../components/Carousel';
import { getVideogames } from '../redux/slices/videogamesSlice';

// TODO: Remove hard-coded data when the reservations endpoint is available
const videogames = [
  {
    id: 10,
    name: 'Minecraft',
    photo: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    description: 'Minecraft is a 2011 sandbox game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before being fully released in November 2011, with Notch stepping down and Jens "Jeb" Bergensten taking over development. Minecraft is the best-selling video game in history, with over 238 million copies sold and nearly 140 million monthly active players as of 2021 and has been ported to several platforms.',
    price_per_day: 1.0,
  },
  {
    id: 5,
    name: 'Fortnite',
    photo: 'https://cdn2.unrealengine.com/25br-s25-egs-launcher-pdp-2560x1440-alt-logo-2560x1440-130a7d39cc26.jpg',
    description: "Grab all of your friends and drop into Epic Games' Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos. The result is a completely unpredictable competitive online experience that gets bigger and even wilder with every new season.",
    price_per_day: 1.0,
  },
  {
    id: 27,
    name: 'Tetris',
    photo: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/06/41/649b054f0aae5_com.n3twork.tetris.png',
    description: 'Welcome to TETRIS®, the official mobile app for the world’s favorite puzzle game. Play through hundreds of unique TETRIS Levels in a new Tetris experience. Play a quick round to beat your own score, or play infinite rounds to master your skills in the TETRIS Single Player Modes. TETRIS forever!',
    price_per_day: 0.1,
  },
];

const Home = ({ deleteButton, message }) => {
  const dispatch = useDispatch();
  // TODO: Enable getting data from Redux when the reservations endpoint is available
  // const videogames = useSelector(selectVideogames);
  // const error = useSelector(selectVideogamesError);
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

  // TODO: Enable error handling when the reservations endpoint is available
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  if (!videogames?.length) {
    return <h1>There are no videogames available</h1>;
  }

  const slicedItems = videogames.slice(page, page + itemsPerPage);
  const disabledLeft = page === 0;
  const disabledRight = page + itemsPerPage === videogames.length;

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
      { message && (
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
