import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Arrow from '../../icons/Arrow/Arrow';
import './Card.css';
import MarginBetween from '../MarginBetween/MarginBetween';

const Card = ({
  to,
  buttonHollow,
  disabled,
  children,
}) => (
  <div className={`Card ${disabled ? 'card-disabled' : ''}`}>
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
                hollow={buttonHollow}
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
  buttonHollow: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  to: '',
  buttonHollow: false,
  disabled: false,
  children: null,
};

export default Card;
