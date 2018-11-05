import React from 'react';

import BasicInformation from './BasicInformation';
import Coverage from './Coverage';

function viewRenderer({ menuIndex, data }) {
  const { subscriber, activeCoverage } = data;

  switch (menuIndex) {
    case '1':
      return <BasicInformation {...subscriber} />;
    case '2':
      return <Coverage activeCoverage={activeCoverage} />;
    default:
      return <p>There is no data to display.</p>;
  }
}

export default viewRenderer;
