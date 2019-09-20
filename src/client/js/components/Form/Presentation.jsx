import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({ handleChange, handleSubmit, brand, product_type}) => (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="brand" placeholder="maybelline" value={brand} type="text" className="validate" onChange={handleChange}/>
          <label htmlFor="brand">Brand</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
          <input id="product_type" placeholder="lipstick" value={product_type} type="text" className="validate" onChange={handleChange}/>
          <label htmlFor="product_type">Product Type</label>
      </div>
      </div>
      <div className="row">
        <div className="col s8 push-s3 calign-wrapper">
            <button className="btn waves-effect waves-light" type="button" name="action" onClick={(e) => {
              handleSubmit({brand, product_type})
            }}>Search
                <i className="material-icons right">send</i>
            </button>
        </div>
      </div>
    </form>
  </div>
);

export default Presentation;

Presentation.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  brand: PropTypes.string,
  product_type: PropTypes.string,
}