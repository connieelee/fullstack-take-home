import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, hollow, children }) => (
  <button
    className={`Button btn-${variant} ${hollow ? 'btn-hollow' : ''}`}
    type="button"
  >
    {
      variant === 'icon'
        ? React.cloneElement(children, { color: hollow ? '#3542ff' : '#ffffff' })
        : children
    }
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['normal', 'icon']),
  hollow: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'normal',
  hollow: false,
  children: null,
};

export default Button;
