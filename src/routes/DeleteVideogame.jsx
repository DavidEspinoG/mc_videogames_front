import { useSelector } from 'react-redux';
import Home from './Home';

const DeleteVideogame = () => {
  const message = useSelector((state) => state.videogames.message);

  return <Home deleteButton message={message} />;
};

export default DeleteVideogame;
