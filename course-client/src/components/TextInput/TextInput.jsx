import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({
  placeholder, value, onChange,
}) => (
  <input
    className="TextInput"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default TextInput;
