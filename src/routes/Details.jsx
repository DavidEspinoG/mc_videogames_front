import { useEffect } from 'react';
import { BiGame } from 'react-icons/bi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import colorWheel from '../assets/color_wheel.png';
import { getDetails } from '../redux/slices/videogamesSlice';
import { selectVideogameDetails } from '../redux/store';
import '../styles/details.scss';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const videogameDetails = useSelector(selectVideogameDetails);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  if (!videogameDetails) {
    return <h1>Loading...</h1>;
  }

  const {
    name, photo, description, price_per_day: pricePerDay,
  } = videogameDetails;

  return (
    <section className="details-section">
      <img src={photo} alt={name} className="thumbnail" />
      <div className="details">
        <h2 className="title">{name}</h2>
        <p className="description">{description}</p>
        <table className="pricing-table">
          <tbody>
            <tr>
              <td>
                Price per day:
                {' '}
                <span>
                  $
                  {pricePerDay}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                Price per week:
                {' '}
                <span>
                  $
                  {pricePerDay * 7}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                Price per month:
                {' '}
                <span>
                  $
                  {pricePerDay * 30}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="discover-button">
          Discover more videogames
          {' '}
          <span>&gt;</span>
        </Link>
        <div className="image-container">
          <BiGame className="icon" />
          <img src={colorWheel} alt="color wheel" className="color-wheel" />
        </div>
        <Link to={`/reserve/?videogameId=${id}`} className="reserve-button">
          Reserve
          <MdKeyboardArrowRight className="icon" />
        </Link>
      </div>
    </section>
  );
};

export default Details;
