import React from 'react';
import './Product.css';
import { FaCartPlus, FaRegStar, FaStar } from 'react-icons/fa';


const Product = ({ product }) => {
    const { name, img, seller, price, stock, features, star } = product;
    const ratings = [1, 2, 3, 4, 5];
    return (
        <div className="product">
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
                                ratings.map((ratng, i) => i < star ? <FaStar /> : <FaRegStar />)
                            }
                        </span>
                        {
                            features.length ? <h4>Features</h4> : ''
                        }

                        <ul className="features">
                            {
                                features.map(feature => <li>{feature.description}: {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;