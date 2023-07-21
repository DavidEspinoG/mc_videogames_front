import PropTypes from 'prop-types';

const LoginInputs = ({
  value, min, type, action, placeholder,
}) => (
  <input
    value={value}
    type={type}
    min={min}
    onChange={action}
    placeholder={placeholder}
    className="input"
    required
  />
);

LoginInputs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  min: PropTypes.number,
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

LoginInputs.defaultProps = {
  type: 'text',
  min: 0,
};

export default LoginInputs;
