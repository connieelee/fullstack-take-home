import React from 'react';
import PropTypes from 'prop-types';
import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import Card from '../../../../components/Card/Card';
import './Sessions.css';

const Sessions = ({ sessions }) => (
  <div className="Sessions">
    <h2>Sessions</h2>
    <MarginBetween>
      {sessions.map(({
        id, sessionNumber, name, description,
      }) => (
        <Card key={id}>
          <h3>{`${sessionNumber}. ${name}`}</h3>
          <p>{description}</p>
        </Card>
      ))}
    </MarginBetween>
  </div>
);

Sessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape({

  })),
};

Sessions.defaultProps = {
  sessions: [],
};

export default Sessions;
