import React from 'react';
import useFetch from '../../hooks/use-fetch';
import CoursesList from './components/CoursesList/CoursesList';
import './Courses.css';

const Courses = () => {
  const [loading, courses, error] = useFetch([], 'http://localhost:8080/courses');

  return (
    <div className="Courses">
      <h1>Courses</h1>
      <CoursesList
        loading={loading}
        courses={courses}
        error={error}
      />
    </div>
  );
};

export default Courses;
