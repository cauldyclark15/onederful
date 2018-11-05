import React from 'react';

import BasicInformation from './BasicInformation';
import Coverage from './Coverage';
import Deductible from './Deductible';

function viewRenderer({ menuIndex, data }) {
  const { subscriber, activeCoverage, deductible } = data;

  switch (menuIndex) {
    case '1':
      return <BasicInformation {...subscriber} />;
    case '2':
      return <Coverage activeCoverage={activeCoverage} />;
    case '3':
      return <Deductible deductible={deductible} />;
    default:
      return <p>There is no data to display.</p>;
  }
}

export default viewRenderer;
