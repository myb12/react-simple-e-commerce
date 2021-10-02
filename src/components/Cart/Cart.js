import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, children }) => {

    // cart.forEach(product => product.quantity ? product.quantity : 1);

    // const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);
    // console.log(totalQuantity);
    // const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
    // const totalShipping = cart.reduce((acc, cur) => acc + cur.shipping, 0);
    // console.log(totalShipping);

    let totalQuantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalQuantity += product.quantity;
        shipping += product.shipping;
    }
    const totalBeforeTax = totalPrice + shipping;
    const tax = totalBeforeTax * 0.10;
    const grandTotal = totalBeforeTax + tax;
    return (
        <div className="cart">

            <div className="order-quantity">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> {totalQuantity}
            </div>
            <h3>Order Summary</h3>
            <p>
                <span>Items:</span>
                <span>${totalPrice.toFixed(2)}</span>
            </p>
            <p>
                <span>Shipping & Handling:</span>
                <span> ${shipping.toFixed(2)}</span>
            </p>
            <p>
                <span>Total before tax:</span>
                <span>${totalBeforeTax.toFixed(2)}</span>
            </p>
            <p>
                <span>Estimated Tax:</span>
                <span>${tax.toFixed(2)}</span>
            </p>
            <p className="order-total">
                <span>Order Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
            </p>
            {children}
        </div>
    );
};

export default Cart;