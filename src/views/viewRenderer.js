import React from 'react';

import BasicInformation from './BasicInformation';
import Coverage from './Coverage';
import Deductible from './Deductible';
import Limitations from './Limitations';
import Coinsurance from './Coinsurance';
import Maximums from './Maximums';

function viewRenderer({ menuIndex, data }) {
  const {
    subscriber,
    activeCoverage,
    deductible,
    limitations,
    coInsurance,
    maximums,
  } = data;

  switch (menuIndex) {
    case '1':
      return <BasicInformation {...subscriber} />;
    case '2':
      return <Coverage activeCoverage={activeCoverage} />;
    case '3':
      return <Deductible deductible={deductible} />;
    case '4':
      return <Limitations limitations={limitations} />;
    case '5':
      return <Coinsurance coinsurance={coInsurance} />;
    case '6':
      return <Maximums maximums={maximums} />;
    default:
      return <p>There is no data to display.</p>;
  }
}

export default viewRenderer;
