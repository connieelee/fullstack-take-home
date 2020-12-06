import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Arrow from '../../icons/Arrow/Arrow';
import './BackButton.css';

const BackButton = ({ to, text, inverted }) => (
  <Link to={to} className="BackButton">
    <Button variant="icon" inverted={inverted}>
      <Arrow direction="left" />
    </Button>
    {text}
  </Link>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  inverted: PropTypes.bool,
};

BackButton.defaultProps = {
  text: '',
  inverted: false,
};

export default BackButton;
