import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SpaceBetween from '../../../components/SpaceBetween/SpaceBetween';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import ArrowRight from '../../../icons/ArrowRight';

const CoursesList = ({ loading, courses, error }) => {
  if (loading) return 'Loading...';
  if (error) return error.message;
  if (!courses.length) return 'No courses available!';

  return (
    <SpaceBetween>
      {
        courses.map(({ id, name, description }) => (
          <Card key={id}>
            <SpaceBetween direction="horizontal">
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <Link to={`/courses/${id}`}>
                <Button variant="icon">
                  <ArrowRight />
                </Button>
              </Link>
            </SpaceBetween>
          </Card>
        ))
      }
    </SpaceBetween>
  );
};

CoursesList.propTypes = {
  loading: PropTypes.bool,
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  error: PropTypes.string,
};

CoursesList.defaultProps = {
  loading: false,
  courses: [],
  error: '',
};

export default CoursesList;
