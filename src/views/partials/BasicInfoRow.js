import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const propTypes = { label: PropTypes.string, value: PropTypes.string };

const defaultProps = { label: 'n/a', value: 'n/a' };

function BasicInfoRow({ label, value }) {
  return (
    <Row>
      <Col span={6}>
        <h4>{label}</h4>
      </Col>
      <Col span={18}>
        <p>{value}</p>
      </Col>
    </Row>
  );
}

BasicInfoRow.propTypes = propTypes;
BasicInfoRow.defaultProps = defaultProps;

export default BasicInfoRow;
