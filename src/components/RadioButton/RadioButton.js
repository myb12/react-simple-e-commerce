import React from 'react';
import './RadioButton.css'

const RadioButton = () => {
    return (
        <div className="radio-button">
            <h4>Shipping options</h4>
            <label className="container">
                <p> 8-10 business days</p>
                <p className="radio-text-small"><small>$0 - Free Shipping</small></p>

                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
            </label>

            <label className="container">
                <p>2-4 business days</p>
                <p className="radio-text-small"><small>$7.99 - Standard Shipping</small></p>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default RadioButton;