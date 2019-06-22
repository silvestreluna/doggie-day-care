import PropTypes from 'prop-types';

const employessShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default { employessShape };
