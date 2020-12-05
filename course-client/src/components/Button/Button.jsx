import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, children }) => (
  <button
    className={`Button btn-${variant}`}
    type="button"
  >
    {
      variant === 'icon'
        ? React.cloneElement(children, { color: '#fff' })
        : children
    }
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['normal', 'icon']),
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'normal',
  children: null,
};

export default Button;
