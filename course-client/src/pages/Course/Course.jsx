import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import useQueryParams from '../../hooks/use-query-params';
import useFetch from '../../hooks/use-fetch';

import BackButton from '../../components/BackButton/BackButton';
import MarginBetween from '../../components/MarginBetween/MarginBetween';
import Sessions from './components/Sessions/Sessions';
import Session from './components/Session/Session';
import Sections from './components/Sections/Sections';
import Section from './components/Section/Section';

import './Course.css';

const Course = () => {
  const { courseId } = useParams();
  const { sectionId, sessionId } = useQueryParams();
  const courseUrl = `http://localhost:8080/courses/${courseId}`;
  const sectionUrl = sectionId ? `${courseUrl}/sections/${sectionId}` : '';

  const [loadingCourse, course, courseError] = useFetch(null, courseUrl);
  const [
    loadingSection,
    selectedSection,
    sectionError,
    setSelectedSection,
  ] = useFetch(null, sectionUrl);
  const [sectionUsersError, setSectionUsersError] = useState(null);

  let sessions = [];
  if (selectedSection) {
    sessions = selectedSection.sessions;
  } else if (course) {
    sessions = course.sessions;
  }
  const selectedSession = sessionId
    ? sessions.find(({ id }) => id === +sessionId)
    : null;

  const removeSectionUser = async (userId) => {
    try {
      setSectionUsersError(null);
      await axios.delete(`http://localhost:8080/sections/${sectionId}/users`, {
        data: { userId },
      });
      const users = selectedSection.users.filter((user) => user.id !== userId);
      setSelectedSection({ ...selectedSection, users });
    } catch (err) {
      setSectionUsersError(err);
    }
  };

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
            {
              !selectedSession
                ? <Sessions sessions={sessions} />
                : <Session {...selectedSession} />
            }
            {
              !sectionId
                ? <Sections sections={course.sections} />
                : (
                  <Section
                    loading={loadingSection}
                    section={selectedSection}
                    error={sectionError}
                    removeUser={removeSectionUser}
                    usersError={sectionUsersError}
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
