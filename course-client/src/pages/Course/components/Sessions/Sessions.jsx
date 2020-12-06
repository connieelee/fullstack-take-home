import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useQueryParams from '../../../../hooks/use-query-params';
import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import Card from '../../../../components/Card/Card';
import propShapes from '../../utils/prop-shapes';

const Sessions = ({ sessions }) => {
  const { pathname } = useLocation();
  const { sectionId } = useQueryParams();
  return (
    <div>
      <h2>Sessions</h2>
      <MarginBetween>
        {sessions.map(({
          id, sessionNumber, name, description, displayReleaseDate, content,
        }) => (
          <Card
            key={id}
            disabled={displayReleaseDate && !content}
            to={content ? `${pathname}?sectionId=${sectionId}&sessionId=${id}` : ''}
            buttonHollow
          >
            <h3>{`${sessionNumber}. ${name}`}</h3>
            <p>{description}</p>
            {displayReleaseDate && (
              <p className="italic">
                {`${content ? 'Released' : 'Available'} on ${displayReleaseDate}`}
              </p>
            )}
          </Card>
        ))}
      </MarginBetween>
    </div>
  );
};

Sessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.shape(propShapes.session)),
};

Sessions.defaultProps = {
  sessions: [],
};

export default Sessions;
