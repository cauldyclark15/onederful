import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const propTypes = {
  formItemLayout: PropTypes.object,
  getFieldDecorator: PropTypes.func.isRequired,
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
};

const defaultProps = { formItemLayout: {}, placeholder: '' };

function FormItemField({
  formItemLayout,
  getFieldDecorator,
  fieldId,
  label,
  options,
  placeholder,
}) {
  return (
    <FormItem {...formItemLayout} label={label}>
      {getFieldDecorator(fieldId, options)(<Input placeholder={placeholder} />)}
    </FormItem>
  );
}

FormItemField.propTypes = propTypes;
FormItemField.defaultProps = defaultProps;

export default FormItemField;
