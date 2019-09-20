import React, { Component } from 'react';
import FormPresentation from './Presentation.jsx';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: '',
        product_type: '',
    };
  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      });
  }

  render() {
      const { brand, product_type } = this.state;
    return <FormPresentation
    handleChange ={this.handleChange}
    brand={brand}
    product_type={product_type}
    handleSubmit = {this.props.fetchDetails}
    />;
  }
}

Form.propTypes = {
  fetchDetails: PropTypes.func,
}