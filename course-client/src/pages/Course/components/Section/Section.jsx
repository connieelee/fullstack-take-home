import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import SectionStatus from '../SectionStatus/SectionStatus';
import BackButton from '../../../../components/BackButton/BackButton';
import getSectionDates from '../../utils/get-section-dates';
import sectionPropType from '../../utils/section-prop-type';

import './Section.css';

const Section = ({ loading, section, error }) => {
  const { courseId } = useParams();
  let header;
  let content;

  if (loading) {
    header = 'Loading...';
  } else if (error) {
    header = 'Error';
    content = <p>{error.message}</p>;
  } else if (section) {
    const {
      name,
      status,
      displayDates,
      users,
    } = section;

    header = (
      <>
        {name}
        <SectionStatus status={status} />
      </>
    );
    content = (
      <div>
        <p>{getSectionDates(displayDates)}</p>
        <div className="participants">
          <h3>Participants</h3>
          <ol>
            {users.map((user) => (
              <li key={user.id}>
                {`${user.name}, ${user.email}`}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="Section">
      <h2 className="section-header">{header}</h2>
      {content}
      <BackButton
        to={`/courses/${courseId}`}
        text="All sections"
        hollow
      />
    </div>
  );
};

Section.propTypes = {
  loading: PropTypes.bool,
  section: sectionPropType,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Section.defaultProps = {
  loading: false,
  section: null,
  error: null,
};

export default Section;
