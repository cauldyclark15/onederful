import React from 'react';
import { Button } from 'antd';

function SampleForm({ onSubmit }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const elementValues = getElementValues(event.target);
        onSubmit(elementValues);
      }}
    >
      <LabeledInput label="email" />
      <LabeledInput label="password" />
      <Button htmlType="submit">submit</Button>
    </form>
  );
}

function LabeledInput({ label, type = 'text', autoComplete = 'off' }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={label}
        type={type}
        autoComplete={autoComplete}
      />
    </div>
  );
}

function getElementValues(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    obj[key] = formNode.elements[key].value;
    return obj;
  }, {});
}

export default SampleForm;
