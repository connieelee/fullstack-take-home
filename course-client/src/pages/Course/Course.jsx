import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Arrow from '../../icons/Arrow/Arrow';
import Button from '../../components/Button/Button';
import MarginBetween from '../../components/MarginBetween/MarginBetween';
import Sessions from './components/Sessions/Sessions';
import Sections from './components/Sections/Sections';

const Course = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  const fetchCourse = async () => {
    setLoading(true);
    setCourse(null);
    setError(null);
    try {
      const { data } = await axios.get(`http://localhost:8080/courses/${courseId}`);
      setCourse(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  return (
    <div className="Course">
      <Link to="/courses">
        <Button variant="icon">
          <Arrow direction="left" />
        </Button>
      </Link>

      {loading && <h1>Loading...</h1>}

      {error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}

      {course && (
        <div>
          <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
          <MarginBetween direction="horizontal" size="m">
            <Sessions sessions={course.sessions} />
            <Sections sections={course.sections} />
          </MarginBetween>
        </div>
      )}
    </div>
  );
};

export default Course;
