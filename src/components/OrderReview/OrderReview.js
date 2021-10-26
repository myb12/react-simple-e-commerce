import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import './OrderReview.css'
import { FaExclamationTriangle } from 'react-icons/fa';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/place-order');
    }
    // console.log(cart);
    return (
        <div className="shop-container" style={{ marginTop: '100px' }}>
            <div className="product-container">
                {
                    cart.length ? cart.map(product => <Product key={product.key} product={product} review handleRemove={() => handleRemove(product.key)} />) : <h2 className="warning-message"><FaExclamationTriangle /> Please add some products in the cart</h2>
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {
                        cart.length ? <button className="btn-regular" onClick={handlePlaceOrder}>Place Order</button> : ''
                    }

                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;