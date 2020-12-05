import React from 'react';
import PropTypes from 'prop-types';
import './SpaceBetween.css';

const SpaceBetween = ({ direction, children }) => (
  <div className={`SpaceBetween space-${direction}`}>
    {children}
  </div>
);

SpaceBetween.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  children: PropTypes.node,
};

SpaceBetween.defaultProps = {
  direction: 'vertical',
  children: null,
};

export default SpaceBetween;
