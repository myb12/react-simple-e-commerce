import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleCart = (product) => setCart([...cart, product]);

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} handleCart={handleCart} product={product} />)
                }

            </div>
            <div className="cart-cotainer">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;