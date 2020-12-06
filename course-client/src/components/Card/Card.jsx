import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Arrow from '../../icons/Arrow/Arrow';
import './Card.css';
import MarginBetween from '../MarginBetween/MarginBetween';

const Card = ({ to, invertButton, children }) => (
  <div className="Card">
    {
      !to
        ? children
        : (
          <MarginBetween
            direction="horizontal"
            className="flex-card"
          >
            <div>{children}</div>
            <Link to={to}>
              <Button
                variant="icon"
                inverted={invertButton}
              >
                <Arrow />
              </Button>
            </Link>
          </MarginBetween>
        )
    }
  </div>
);

Card.propTypes = {
  to: PropTypes.string,
  invertButton: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  to: '',
  invertButton: false,
  children: null,
};

export default Card;
