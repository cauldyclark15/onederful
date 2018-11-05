import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Checkbox } from 'antd';

import { IndividualField, FormItemField } from './fields';

const FormItem = Form.Item;

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onAddDependent: PropTypes.func,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func,
  }).isRequired,
};

const defaultProps = {};

function PatientForm({
  onSubmit,
  onAddDependent,
  showAddDependentFields,
  form: { getFieldDecorator, validateFieldsAndScroll },
}) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const _handleSubmit = e => {
    e.preventDefault();

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  return (
    <Form onSubmit={_handleSubmit}>
      <IndividualField
        firstName="firstName"
        lastName="lastName"
        dob="dob"
        memberId="memberId"
        formItemLayout={formItemLayout}
        getFieldDecorator={getFieldDecorator}
      />
      <FormItemField
        formItemLayout={formItemLayout}
        getFieldDecorator={getFieldDecorator}
        fieldId="npi"
        options={{ rules: [{ required: true, message: 'Required' }] }}
        placeholder="Provider number"
        label="Provider"
      />
      <FormItemField
        formItemLayout={formItemLayout}
        getFieldDecorator={getFieldDecorator}
        fieldId="id"
        options={{ rules: [{ required: true, message: 'Required' }] }}
        placeholder="Payer number"
        label="Payer"
      />
      <FormItem {...tailFormItemLayout}>
        {getFieldDecorator('showAddDependent', {
          valuePropName: 'checked',
        })(
          <Checkbox data-testid="checkbox" onChange={onAddDependent}>
            Add dependent
          </Checkbox>
        )}
      </FormItem>
      {showAddDependentFields && (
        <IndividualField
          firstName="dependentFirstName"
          lastName="dependentLastName"
          dob="dependentDob"
          memberId="dependentMemberId"
          formItemLayout={formItemLayout}
          getFieldDecorator={getFieldDecorator}
          isDependent
        />
      )}
      <FormItem {...tailFormItemLayout}>
        <Button data-testid="f-submit" type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
}

PatientForm.propTypes = propTypes;
PatientForm.defaultProps = defaultProps;

export default Form.create()(PatientForm);
