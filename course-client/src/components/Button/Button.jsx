import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, inverted, children }) => (
  <button
    className={`Button btn-${variant} ${inverted ? 'btn-inverted' : ''}`}
    type="button"
  >
    {
      variant === 'icon'
        ? React.cloneElement(children, { color: inverted ? '#3542ff' : '#ffffff' })
        : children
    }
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['normal', 'icon']),
  inverted: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'normal',
  inverted: false,
  children: null,
};

export default Button;
