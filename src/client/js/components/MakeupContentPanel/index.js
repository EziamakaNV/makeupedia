import React, { Component } from 'react';
import MakeupDetails from './Presentation.jsx';
import PropTypes from 'prop-types';

export default class MakeupContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      if (this.props.makeupDetails) {
        return (
            <div className='col s9'>
                <div className='container'>
                    <ul>
                        {this.props.makeupDetails.map((detail) => (
                        <li key={detail.id}>
                            <MakeupDetails
                            image_link={detail.image_link}
                            name={detail.name}
                            price_sign={detail.price_sign}
                            price={detail.price}
                            />
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
      }
      return null;
  }
}

MakeupContentPanel.propTypes = {
  makeupDetails : PropTypes.array,
}