import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [displayProducts, setDisplayProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

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
        fetch(`https://evening-springs-35883.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const numOfPage = Math.ceil(count / size);
                setPageCount(numOfPage);

            })

    }, [page]);

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

                    <div className="pagination">
                        {
                            [...Array(pageCount)].map((el, i) => <button onClick={() => setPage(i)} key={i} className={page === i ? 'selected' : ''}>{i + 1}</button>)
                        }
                    </div>

                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/order-review">
                            <button className="btn-regular">Review your orders</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;