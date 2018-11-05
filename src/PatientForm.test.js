import React from 'react';
import { cleanup, render } from 'react-testing-library';
import startsWith from 'lodash/startsWith';

import PatientForm from './PatientForm';

test('react-testing-library', () => {
  const handleSubmit = jest.fn();
  const { getByTestId, getByPlaceholderText } = render(
    <PatientForm onSubmit={handleSubmit} />
  );

  const firstNameInput = getByTestId('firstName');
  firstNameInput[getKey(firstNameInput)].onChange('Jose');

  const lastNameInput = getByTestId('lastName');
  lastNameInput[getKey(lastNameInput)].onChange('Cuervo');

  const providerInput = getByPlaceholderText('Provider number');
  providerInput[getKey(providerInput)].onChange('11111');

  const memberIdInput = getByTestId('memberId');
  memberIdInput[getKey(memberIdInput)].onChange('22222');

  const payerInput = getByPlaceholderText('Payer number');
  payerInput[getKey(payerInput)].onChange('33333');

  const submitButton = getByTestId('f-submit');
  submitButton.click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      firstName: 'Jose',
      lastName: 'Cuervo',
      memberId: '22222',
      npi: '11111',
      id: '33333',
    })
  );

  cleanup();
});

function getKey(inputElement) {
  const keyNames = Object.getOwnPropertyNames(inputElement);
  return keyNames.filter(n => startsWith(n, '__reactEventHandlers'))[0];
}
