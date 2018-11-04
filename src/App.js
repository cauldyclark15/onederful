import React, { Component } from 'react';

import Form from './Form';
import { authenticate } from './util';

class App extends Component {
  async componentDidMount() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      console.log(accessToken, '++++++++++');
    } else {
      await authenticate();
    }
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
