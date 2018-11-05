import React from 'react';
import renderer from 'react-test-renderer';

import BasicInformation from '../BasicInformation';

it('renders correctly and unchange so far', () => {
  const tree = renderer.create(<BasicInformation />).toJSON();

  expect(tree).toMatchSnapshot();
});
