import React from 'react';
import PropTypes from 'prop-types';
import './Participant.css';

const Participant = ({
  id, name, email, remove,
}) => (
  <div className="Participant">
    <span>{`${name}, ${email}`}</span>
    <button type="button" onClick={() => remove(id)}>
      remove
    </button>
  </div>
);

Participant.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  remove: PropTypes.func,
};

Participant.defaultProps = {
  remove: () => {},
};

export default Participant;
