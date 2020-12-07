import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import BackButton from '../../../../components/BackButton/BackButton';
import SectionStatus from '../SectionStatus/SectionStatus';
import Participant from './components/Participant/Participant';
import getSectionDates from '../../utils/get-section-dates';
import propShapes from '../../utils/prop-shapes';

import './Section.css';

const Section = ({
  loading,
  section,
  error,
  removeUser,
  usersError,
}) => {
  const { courseId } = useParams();

  return (
    <MarginBetween size="m" className="Section">
      {loading && <h3>Loading...</h3>}

      {error && (
        <>
          <h3>Error</h3>
          <p>{error.message}</p>
        </>
      )}

      {section && (
        <>
          <div>
            <h2 className="section-header">
              {section.name}
              <SectionStatus status={section.status} />
            </h2>
            <p className="italic">{getSectionDates(section.displayDates)}</p>
          </div>

          <div>
            <h3>Participants</h3>
            <ol className="users-list">
              {section.users.map((user) => (
                <li key={user.id}>
                  <Participant
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    remove={removeUser}
                  />
                </li>
              ))}
            </ol>
            {usersError && (
              <p className="error-text">{usersError.message}</p>
            )}
          </div>
        </>
      )}

      <BackButton
        to={`/courses/${courseId}`}
        text="All sections"
        hollow
      />
    </MarginBetween>
  );
};

Section.propTypes = {
  loading: PropTypes.bool,
  section: PropTypes.shape(propShapes.section),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  removeUser: PropTypes.func,
  usersError: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Section.defaultProps = {
  loading: false,
  section: null,
  error: null,
  removeUser: () => {},
  usersError: null,
};

export default Section;
