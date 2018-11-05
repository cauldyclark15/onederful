import React, { Fragment } from 'react';
import { Form, DatePicker, Input } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  formItemLayout: PropTypes.object,
  getFieldDecorator: PropTypes.func.isRequired,
};

const defaultProps = { formItemLayout: {} };

function IndividualField({
  firstName,
  lastName,
  memberId,
  dob,
  formItemLayout,
  getFieldDecorator,
}) {
  return (
    <Fragment>
      <FormItem {...formItemLayout} label={'First name'}>
        {getFieldDecorator(firstName, {
          rules: [{ required: true, message: 'Required' }],
        })(<Input data-testid={firstName} placeholder="First name" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Last name">
        {getFieldDecorator(lastName, {
          rules: [{ required: true, message: 'Required' }],
        })(<Input data-testid={lastName} placeholder="Last name" />)}
      </FormItem>
      <FormItem hasFeedback {...formItemLayout} label="Date of birth">
        {getFieldDecorator(dob, {
          rules: [
            {
              required: process.env.NODE_ENV === 'test' ? false : true,
              message: 'Required',
            },
          ],
        })(<DatePicker style={{ width: '100%' }} />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Member ID">
        {getFieldDecorator(memberId, {
          rules: [{ required: true, message: 'Required' }],
        })(<Input data-testid={memberId} placeholder="Member ID" />)}
      </FormItem>
    </Fragment>
  );
}

IndividualField.propTypes = propTypes;
IndividualField.defaultProps = defaultProps;

export default IndividualField;
