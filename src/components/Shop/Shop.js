import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    const handleCart = (product) => {

        const newCart = [...cart];
        const existing = cart.find(c => c.key === product.key);
        if (existing) {
            product.quantity += 1;
        } else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product.key);
    };

    useEffect(() => {
        fetch('./fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
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

        setCart(storedInCart);

    }, [products]);

    const handleChange = (e) => {
        const searchTxt = e.target.value.toLowerCase();
        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchTxt));
        setDisplayProducts(searchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" placeholder="Type here to search" onChange={handleChange} />
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product key={product.key} handleCart={handleCart} product={product} />)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;