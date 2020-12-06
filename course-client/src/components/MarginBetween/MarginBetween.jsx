import React from 'react';
import PropTypes from 'prop-types';
import './MarginBetween.css';

const MarginBetween = ({
  direction, size, className, children,
}) => (
  <div className={`MarginBetween margin-${direction} margin-${size} ${className}`}>
    {children}
  </div>
);

MarginBetween.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOf(['s', 'm']),
  className: PropTypes.string,
  children: PropTypes.node,
};

MarginBetween.defaultProps = {
  direction: 'vertical',
  size: 's',
  className: '',
  children: null,
};

export default MarginBetween;
