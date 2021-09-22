import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.key} />)
                }

            </div>
            <div className="cart-cotainer">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;