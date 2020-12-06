import PropTypes from 'prop-types';

export default {
  section: {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayDates: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    }).isRequired,
    status: PropTypes.oneOf(['Open', 'In progress', 'Ended']).isRequired,
  },
  session: {
    id: PropTypes.number,
    sessionNumber: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    displayReleaseDate: PropTypes.string,
    content: PropTypes.string,
  },
};
