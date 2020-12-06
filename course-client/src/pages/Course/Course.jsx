import React from 'react';
import { useParams } from 'react-router-dom';

import useQueryParams from '../../hooks/use-query-params';
import useFetch from '../../hooks/use-fetch';

import BackButton from '../../components/BackButton/BackButton';
import MarginBetween from '../../components/MarginBetween/MarginBetween';
import Sessions from './components/Sessions/Sessions';
import Sections from './components/Sections/Sections';
import Section from './components/Section/Section';

import './Course.css';

const Course = () => {
  const { courseId } = useParams();
  const { sectionId } = useQueryParams();
  const courseUrl = `http://localhost:8080/courses/${courseId}`;
  const sectionUrl = sectionId ? `${courseUrl}/sections/${sectionId}` : '';

  const [loadingCourse, course, courseError] = useFetch(null, courseUrl);
  const [loadingSection, selectedSection, sectionError] = useFetch(null, sectionUrl);

  return (
    <div className="Course">
      <BackButton to="/courses" text="All courses" />

      {loadingCourse && <h1>Loading...</h1>}

      {courseError && (
        <>
          <h1>Error</h1>
          <p>{courseError.message}</p>
        </>
      )}

      {course && (
        <div>
          <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
          <MarginBetween
            className="columns"
            direction="horizontal"
            size="m"
          >
            <Sessions sessions={selectedSection ? selectedSection.sessions : course.sessions} />
            {
              !sectionId
                ? <Sections sections={course.sections} />
                : (
                  <Section
                    loading={loadingSection}
                    section={selectedSection}
                    error={sectionError}
                  />
                )
            }
          </MarginBetween>
        </div>
      )}
    </div>
  );
};

export default Course;
