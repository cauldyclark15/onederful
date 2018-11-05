import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Layout, Menu, Spin } from 'antd';

import viewRenderer from './views/viewRenderer';

const { Header, Content } = Layout;
const MenuItem = Menu.Item;

const propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
  menuIndex: PropTypes.string.isRequired,
};

const defaultProps = { data: {}, isLoading: false };

function Result({ data, isLoading, onSelect, menuIndex }) {
  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
          onSelect={onSelect}
        >
          <MenuItem key="1">Basic Information</MenuItem>
          <MenuItem key="2">Coverage</MenuItem>
          <MenuItem key="3">Deductible</MenuItem>
          <MenuItem key="4">Limitations</MenuItem>
          <MenuItem key="5">Coinsurance</MenuItem>
          <MenuItem key="6">Maximum</MenuItem>
        </Menu>
      </Header>
      <Content style={{ background: '#fff' }}>
        {isLoading ? (
          <div className="spin-kit">
            <Spin />
          </div>
        ) : isEmpty(data) ? (
          <p>There is no data to display.</p>
        ) : (
          viewRenderer({ menuIndex, data })
        )}
      </Content>
    </Layout>
  );
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;
