import PropTypes from 'prop-types';

const ReservationDetails = ({ label, value }) => (
  <p className="mb-0">
    <span className="fw-bold">{label}</span>
    {' '}
    {value}
  </p>
);

ReservationDetails.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ReservationDetails;
