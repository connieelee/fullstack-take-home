import React, { useState, useEffect } from 'react';
import CoursesList from './CoursesList/CoursesList';
import './Courses.css';

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/courses');
        setCourses(await response.json());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
