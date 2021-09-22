import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
   
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p>
                <span>Items:</span>
                <span>$58.97</span>
            </p>
            <p>
                <span>Shipping & Handling:</span>
                <span> $11.98</span>
            </p>
            <p>
                <span>Total before tax:</span>
                <span>$70.95</span>
            </p>
            <p>
                <span>Estimated Tax:</span>
                <span>$7.1</span>
            </p>
            <p className="order-total">
                <span>Order Total:</span>
                <span>$78.05</span>
            </p>
            <button className="btn-regular">Review your orders</button>
        </div>
    );
};

export default Cart;