import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoursesList from './components/CoursesList/CoursesList';
import './Courses.css';

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/courses');
        setCourses(data);
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
