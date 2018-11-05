import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

const propTypes = {
  deductible: PropTypes.array,
};

const defaultProps = {
  deductible: [],
};

function Deductible({ deductible }) {
  const dataSource = deductible.map((de, index) => ({ ...de, key: index }));
  const columns = [
    {
      title: 'Qualifier',
      dataIndex: 'time_qualifier',
    },
    {
      title: 'Coverage Level',
      dataIndex: 'coverage_level',
    },
    {
      title: 'Service Type',
      dataIndex: 'service_type',
    },
    {
      title: 'Plan Coverage',
      dataIndex: 'plan_coverage_description',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
  ];
  return (
    <Card title="Deductible" style={{ width: '100%', height: '100%' }}>
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
}

Deductible.propTypes = propTypes;
Deductible.defaultProps = defaultProps;

export default Deductible;
