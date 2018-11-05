import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { Pre, Samp } from './StyledComponents';

function Result({ data, isLoading }) {
  return (
    <Pre>
      {isEmpty(data) && !isLoading ? (
        <Samp>No data found.</Samp>
      ) : (
        <Samp>{isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</Samp>
      )}
    </Pre>
  );
}

export default Result;
