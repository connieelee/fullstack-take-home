import React from 'react';
import PropTypes from 'prop-types';
import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import Card from '../../../../components/Card/Card';
import Badge from '../../../../components/Badge/Badge';
import './Sections.css';

const statusColors = {
  Open: 'green',
  'In progress': 'blue',
  Ended: 'grey',
};

const Sections = ({ sections }) => (
  <div className="Sections">
    <h2>Sections</h2>
    <MarginBetween>
      {sections.map(({
        id,
        name,
        displayDates: { startDate, endDate },
        status,
      }) => (
        <Card key={id}>
          <MarginBetween direction="horizontal">
            <h3>{name}</h3>
            <p>{`${startDate} - ${endDate}`}</p>
            <Badge color={statusColors[status]}>{status}</Badge>
          </MarginBetween>
        </Card>
      ))}
    </MarginBetween>
  </div>
);

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({

  })),
};

Sections.defaultProps = {
  sections: [],
};

export default Sections;
