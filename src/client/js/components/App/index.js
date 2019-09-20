import React, { Component } from 'react';
import Header from '../Header';
import PageLayout from '../Layout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <PageLayout/>
      </React.Fragment>
    );
  }
}
