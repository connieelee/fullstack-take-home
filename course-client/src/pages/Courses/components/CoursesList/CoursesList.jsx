import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/Button/Button';
import Arrow from '../../../../icons/Arrow/Arrow';

import './CoursesList.css';

const CoursesList = ({ loading, courses, error }) => {
  if (loading) return 'Loading...';
  if (error) return error.message;
  if (!courses.length) return 'No courses available!';

  return (
    <MarginBetween className="CoursesList">
      {
        courses.map(({ id, name, description }) => (
          <Card key={id}>
            <MarginBetween
              direction="horizontal"
              className="course-card"
            >
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <Link to={`/courses/${id}`}>
                <Button variant="icon">
                  <Arrow />
                </Button>
              </Link>
            </MarginBetween>
          </Card>
        ))
      }
    </MarginBetween>
  );
};

CoursesList.propTypes = {
  loading: PropTypes.bool,
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

CoursesList.defaultProps = {
  loading: false,
  courses: [],
  error: null,
};

export default CoursesList;
