import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({ image_link, name, price_sign, price }) => (
    <React.Fragment>
    <div className="section">
        <div className="row">
            <img className="col s6 push-s3" src = {image_link} alt={name}></img>
        </div>
        <p>Name: {name}</p>
        <p>Price: {`${price_sign}${price}`}</p>
    </div>
    <div className="divider"></div>
    </React.Fragment>
);

export default Presentation;

Presentation.propTypes = {
    image_link: PropTypes.string,
    name: PropTypes.string,
    price_sign: PropTypes.string,
    price: PropTypes.string,
}