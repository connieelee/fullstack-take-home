import React from 'react';
import PropTypes from 'prop-types';

import MarginBetween from '../../../../components/MarginBetween/MarginBetween';
import Card from '../../../../components/Card/Card';
import SectionStatus from '../SectionStatus/SectionStatus';

import propShapes from '../../utils/prop-shapes';
import { getDateRangeString } from '../../utils/date-utils';

const Sections = ({ sections }) => (
  <div>
    <h2>Sections</h2>
    <MarginBetween>
      {sections.map(({
        id,
        name,
        startDate,
        endDate,
        status,
      }) => (
        <Card key={id} to={`?sectionId=${id}`} buttonHollow>
          <div>
            <h3 className="section-header">
              {name}
              <SectionStatus status={status} />
            </h3>
            <p className="italic">{getDateRangeString(startDate, endDate)}</p>
          </div>
        </Card>
      ))}
    </MarginBetween>
  </div>
);

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(propShapes.section)),
};

Sections.defaultProps = {
  sections: [],
};

export default Sections;
