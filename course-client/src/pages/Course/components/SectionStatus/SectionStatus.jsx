import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../../../components/Badge/Badge';

const statusColors = {
  Open: 'green',
  'In progress': 'blue',
  Ended: 'grey',
};

const SectionStatus = ({ status }) => (
  <Badge color={statusColors[status]}>{status}</Badge>
);

SectionStatus.propTypes = {
  status: PropTypes.oneOf(['Open', 'In progress', 'Ended']).isRequired,
};

export default SectionStatus;
