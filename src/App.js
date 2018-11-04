import React, { Component } from 'react';

import Form from './Form';

class App extends Component {
  async componentDidMount() {
    const {
      REACT_APP_AUTH_URL,
      REACT_APP_CLIENT_ID,
      REACT_APP_CLIENT_SECRET,
    } = process.env;

    const response = await fetch(REACT_APP_AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        client_id: REACT_APP_CLIENT_ID,
        client_secret: REACT_APP_CLIENT_SECRET,
      }),
    });

    const responseJson = await response.json();
    const { access_token, expires_in } = responseJson;

    const dateNow = new Date().getTime();

    localStorage.setItem('accessToken', access_token);
    localStorage.setItem(
      'expirationDate',
      parseInt(dateNow) + parseInt(expires_in)
    );
  }

  _onSubmit = values => {
    console.log({ values });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this._onSubmit} />
      </div>
    );
  }
}

export default App;
