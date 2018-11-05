import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

const propTypes = {
  limitations: PropTypes.array,
};

const defaultProps = {
  limitations: [],
};

function Limitations({ limitations }) {
  const dataSource = limitations.map((de, index) => ({ ...de, key: index }));
  const columns = [
    {
      title: 'Messages',
      dataIndex: 'messages',
      render: content => content && content.join(', '),
    },
    {
      title: 'Procedure Code',
      dataIndex: 'procedure_code',
    },
  ];
  return (
    <Card title="Limitations" style={{ width: '100%', height: '100%' }}>
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
}

Limitations.propTypes = propTypes;
Limitations.defaultProps = defaultProps;

export default Limitations;
