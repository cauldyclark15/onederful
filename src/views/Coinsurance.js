import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

const propTypes = {
  coinsurance: PropTypes.array,
};

const defaultProps = {
  coinsurance: [],
};

function Coinsurance({ coinsurance }) {
  const dataSource = coinsurance.map((item, index) => ({
    ...item,
    key: index,
  }));
  const columns = [
    {
      title: 'Insurance Type',
      dataIndex: 'insurance_type',
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
      title: '% String',
      dataIndex: 'percentage_string',
    },
    {
      title: '% for Provider',
      dataIndex: 'percentage_for_provider',
    },
    {
      title: 'Percentage',
      dataIndex: 'percentage',
    },
  ];
  return (
    <Card title="Coinsurance" style={{ width: '100%', height: '100%' }}>
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
}

Coinsurance.propTypes = propTypes;
Coinsurance.defaultProps = defaultProps;

export default Coinsurance;
