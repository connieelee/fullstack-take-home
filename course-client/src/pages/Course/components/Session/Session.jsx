import React from 'react';
import { useLocation } from 'react-router-dom';
import useQueryParams from '../../../../hooks/use-query-params';
import BackButton from '../../../../components/BackButton/BackButton';
import propShapes from '../../utils/prop-shapes';
import MarginBetween from '../../../../components/MarginBetween/MarginBetween';

const Session = ({
  sessionNumber,
  name,
  displayReleaseDate,
  description,
  content,
}) => {
  const { pathname } = useLocation();
  const { sectionId } = useQueryParams();

  return (
    <MarginBetween size="m">
      <div>
        <h2>{`Session ${sessionNumber}: ${name}`}</h2>
        <p>{description}</p>
      </div>
      <div>
        <h3>Content</h3>
        <p className="italic">{`Released on ${displayReleaseDate}`}</p>
        <p>{content}</p>
      </div>
      <BackButton
        to={`${pathname}?sectionId=${sectionId}`}
        text="All sessions"
        hollow
      />
    </MarginBetween>
  );
};

Session.propTypes = propShapes.session;

export default Session;
