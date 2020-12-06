import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ color, children }) => (
  <div className={`Badge badge-${color}`}>
    {children}
  </div>
);

Badge.propTypes = {
  color: PropTypes.oneOf(['green', 'blue', 'grey']),
  children: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  color: 'blue',
};

export default Badge;
