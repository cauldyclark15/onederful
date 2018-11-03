import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Form from './Form';

test('react-testing-library', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByTestId } = render(
    <Form onSubmit={handleSubmit} />
  );
  const emailInput = getByLabelText('email');
  emailInput.value = 'boom@boom.com';

  const passwordInput = getByLabelText('password');
  passwordInput.value = 'nononono';

  const submitButton = getByTestId('f1-submit');
  submitButton.click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      email: 'boom@boom.com',
      password: 'nononono',
    })
  );

  cleanup();
});
