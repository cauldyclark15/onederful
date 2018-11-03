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

    const { access_token, expires_in } = await response.json();
    const dateNow = new Date().getTime();
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem(
      'expirationDate',
      parseInt(dateNow) + parseInt(expires_in)
    );
  }

  _onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target;

    console.log(email.value, password.value);
  };

  render() {
    return (
      <div>
        <Form handleSubmit={this._onSubmit} />
      </div>
    );
  }
}

export default App;
