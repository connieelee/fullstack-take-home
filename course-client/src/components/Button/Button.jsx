import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  onClick,
  variant,
  disabled,
  hollow,
  children,
}) => (
  <button
    className={`Button btn-${variant} ${disabled ? 'btn-disabled' : ''} ${hollow ? 'btn-hollow' : ''}`}
    type="button"
    onClick={onClick}
  >
    {
      variant === 'icon'
        ? React.cloneElement(children, { color: hollow ? '#3542ff' : '#ffffff' })
        : children
    }
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['normal', 'icon']),
  disabled: PropTypes.bool,
  hollow: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'normal',
  disabled: false,
  hollow: false,
  children: null,
};

export default Button;
