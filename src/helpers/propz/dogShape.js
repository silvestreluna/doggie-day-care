import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

});

export default { dogShape };
