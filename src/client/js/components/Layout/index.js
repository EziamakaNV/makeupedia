import React, { Component } from 'react';
import FormPanel from '../FormPanel';
import MakeupContentPanel from '../MakeupContentPanel';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makeupDetails: [],
    };
  }

  fetchDetails = (details) => {
    let query = ``;
    const parameters = Object.keys(details);
    parameters.forEach((parameter, index) => {
      if (index === 0) {
        query = query + `${parameter}=${details[parameter]}`
      } else {
        query = query + `&${parameter}=${details[parameter]}`
      }
    });
    console.log(query);
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${query}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      this.setState({makeupDetails: data});
    });
  }

  render() {
    return (
        <div className='row'>
            <FormPanel fetchDetails={this.fetchDetails}/>
            <MakeupContentPanel makeupDetails={this.state.makeupDetails}/>
        </div>
    );
  }
}
