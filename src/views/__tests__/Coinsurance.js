import React from 'react';
import renderer from 'react-test-renderer';

import Coinsurance from '../Coinsurance';

it('renders correctly and unchange so far', () => {
  const tree = renderer.create(<Coinsurance />).toJSON();

  expect(tree).toMatchSnapshot();
});
