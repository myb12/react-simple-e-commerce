import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleCart = (product) => {
        setCart([...cart, product]);
        addToDb(product.key);
    };

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const savedItem = getStoredCart();
        // const keys = Object.keys(savedItem);
        // const savedProduct = keys.map(key => products.find(product => product.key === key));
        const storedInCart = [];
        for (const key in savedItem) {
            const savedProduct = products.find(product => product.key === key);
            if (!savedProduct) return;
            savedProduct.quantity = savedItem[key];
            storedInCart.push(savedProduct);
        }
        // console.log(storedInCart);

        setCart(storedInCart);

    }, [products]);

    
    // console.log(totalQuantity);
    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Type here to search" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product key={product.key} handleCart={handleCart} product={product} />)
                    }

                </div>
                <div className="cart-cotainer">
                    <Cart cart={cart}  />
                </div>
            </div>
        </>
    );
};

export default Shop;