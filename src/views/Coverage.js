import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

const propTypes = {
  activeCoverage: PropTypes.array,
};

const defaultProps = {
  activeCoverage: [],
};

function Coverage({ activeCoverage }) {
  const coverage = activeCoverage.map((ac, index) => ({ ...ac, key: index }));
  const coverageCols = [
    {
      title: 'Level',
      dataIndex: 'coverage_level',
    },
    {
      title: 'Insurance Type',
      dataIndex: 'insurance_type',
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
      title: 'Message',
      dataIndex: 'messages',
    },
  ];
  return (
    <Card title="Active Coverage" style={{ width: '100%', height: '100%' }}>
      <Table columns={coverageCols} dataSource={coverage} />
    </Card>
  );
}

Coverage.propTypes = propTypes;
Coverage.defaultProps = defaultProps;

export default Coverage;
