import React, { Component } from 'react';
import Form from '../Form';
import PropTypes from 'prop-types';

export default class FormPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className='col s3'>
            <div className='container'>
                <Form fetchDetails={this.props.fetchDetails}/>
            </div>
        </div>
    );
  }
}

FormPanel.propTypes = {
  fetchDetails: PropTypes.func,
}
