import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import { Alert } from 'antd';

import PatientForm from './PatientForm';
import Result from './Result';
import { authenticate, call } from './util';
import { MainWrapper, CardWrapper } from './StyledComponents';

class App extends Component {
  state = {
    patientData: {},
    loading: false,
    showAddDependentFields: false,
    menuIndex: '1',
  };

  async componentDidMount() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      await authenticate();
    }
  }

  _onSelectMenu = ({ key }) => {
    this.setState({ menuIndex: key });
  };

  _onAddDependent = event => {
    this.setState({ showAddDependentFields: event.target.checked });
  };

  _onSubmit = async values => {
    this.setState({ loading: true });
    const { firstName, lastName, memberId, npi, id, showAddDependent } = values;
    const bodyObj = {
      subscriber: {
        firstName,
        lastName,
        memberId,
      },
      provider: {
        npi,
      },
      payer: {
        id,
      },
    };

    if (!isEmpty(values.dob)) {
      const dobString = moment(values.dob).format('L');
      bodyObj.subscriber.dob = dobString;
    }

    if (showAddDependent) {
      const {
        dependentFirstName,
        dependentLastName,
        dependentDob,
        dependentMemberId,
      } = this.props;
      bodyObj.dependent = {};
      bodyObj.dependent.firstName = dependentFirstName;
      bodyObj.dependent.lastName = dependentLastName;
      bodyObj.dependent.dob = dependentDob;
      bodyObj.dependent.memberId = dependentMemberId;
    }

    const body = JSON.stringify(bodyObj);
    const accessToken = localStorage.getItem('accessToken');
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`,
    };

    const patientData = await call({
      url: process.env.REACT_APP_ELIGIBILITY_URL,
      method,
      headers,
      body,
    });
    this.setState({ patientData, loading: false });
  };

  render() {
    const {
      patientData,
      loading,
      showAddDependentFields,
      menuIndex,
    } = this.state;
    return (
      <MainWrapper>
        <div className="screen form">
          <CardWrapper className="left">
            <Alert
              style={{ margin: '16px 0', paddingLeft: 20, paddingRight: 20 }}
              message="Information form"
            />
            <PatientForm
              onSubmit={this._onSubmit}
              showAddDependentFields={showAddDependentFields}
              onAddDependent={this._onAddDependent}
            />
          </CardWrapper>
        </div>
        <div className="screen result">
          <CardWrapper className="right">
            <Alert
              style={{ margin: '16px 0', paddingLeft: 20, paddingRight: 20 }}
              message="Patient's information"
            />
            <Result
              data={patientData}
              isLoading={loading}
              menuIndex={menuIndex}
              onSelect={this._onSelectMenu}
            />
          </CardWrapper>
        </div>
      </MainWrapper>
    );
  }
}

export default App;
