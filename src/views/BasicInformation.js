import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'antd';

import BasicInfoRow from './partials/BasicInfoRow';

const propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  member_id: PropTypes.string,
  dob: PropTypes.string,
  gender: PropTypes.string,
  reference: PropTypes.object,
  date_time_periods: PropTypes.array,
  entity: PropTypes.string,
  zip_code: PropTypes.string,
};

const defaultProps = {
  name: 'User',
  address: 'n/a',
  member_id: 'n/a',
  dob: 'n/a',
  gender: 'n/a',
  reference: { description: 'n/a' },
  date_time_periods: [],
  entity: 'n/a',
  zip_code: 'n/a',
};

function BasicInformation({
  name,
  address,
  member_id,
  dob,
  gender,
  reference,
  date_time_periods,
  entity,
  zip_code,
}) {
  const data = date_time_periods.map((dtp, index) => ({ ...dtp, key: index }));
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date_string',
    },
    {
      title: 'Qualifier',
      dataIndex: 'date_qualifier',
    },
  ];

  return (
    <Card title={name} style={{ width: '100%', height: '100%' }}>
      <BasicInfoRow label="Address" value={address} />
      <BasicInfoRow label="Member ID" value={member_id} />
      <BasicInfoRow label="Date of birth" value={dob} />
      <BasicInfoRow label="Gender" value={gender} />
      <BasicInfoRow label="Reference" value={reference.description} />
      <BasicInfoRow label="Entity" value={entity} />
      <BasicInfoRow label="Zip code" value={zip_code} />
      <h3>Date time periods</h3>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}

BasicInformation.propTypes = propTypes;
BasicInformation.defaultProps = defaultProps;

export default BasicInformation;
