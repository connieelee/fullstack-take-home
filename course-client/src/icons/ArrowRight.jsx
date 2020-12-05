import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ flexShrink: 0 }}
  >
    <title>arrow-right</title>
    <path
      fill={color}
      d="M22.707,11.293L15,3.586L13.586,5l6,6H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h17.586l-6,6L15,20.414 l7.707-7.707C23.098,12.316,23.098,11.684,22.707,11.293z"
    />
  </svg>
);

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

ArrowRight.defaultProps = {
  color: '#000000',
  size: 20,
};

export default ArrowRight;
