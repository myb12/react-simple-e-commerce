import React from 'react';
import './Product.css';
import { FaCartPlus, FaRegStar, FaStar } from 'react-icons/fa';


const Product = ({ product, handleCart }) => {
    const { name, img, seller, price, stock, features, star } = product;

    return (
        <div className="product" onClick={() => handleCart(product)}>
            <div className="product-image">
                <img src={img} alt="Product" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <div className="product-description">
                    <div>
                        <div>
                            <p>${price}</p>
                            <p><small>Only {stock} left in stock - order soon</small></p>
                        </div>
                        <button className="btn-regular"><FaCartPlus className="icon-cart" />Add to cart</button>
                    </div>

                    <div>
                        <span className="ratings">
                            {
                                [...Array(5)].map((ratng, i) => i < star ? <FaStar key={i} /> : <FaRegStar key={i} />)
                            }
                        </span>
                        {
                            features.length ? <h4>Features</h4> : ''
                        }
                        <ul className="features">
                            {
                                features.map((feature, i) => <li key={i}>{feature.description}: {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;