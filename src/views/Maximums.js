import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

const propTypes = {
  maximums: PropTypes.array,
};

const defaultProps = {
  maximums: [],
};

function Maximums({ maximums }) {
  const dataSource = maximums.map((de, index) => ({ ...de, key: index }));
  const columns = [
    {
      title: 'Time Qualifier',
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
      title: 'Network Status',
      dataIndex: 'in_network_status',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
  ];
  return (
    <Card title="maximums" style={{ width: '100%', height: '100%' }}>
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
}

Maximums.propTypes = propTypes;
Maximums.defaultProps = defaultProps;

export default Maximums;
