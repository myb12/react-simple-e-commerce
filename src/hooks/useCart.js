import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedItem = getStoredCart();
        const keys = Object.keys(savedItem);
        console.log(keys);

        fetch('https://evening-springs-35883.herokuapp.com/products/by_keys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);

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
            })

    }, []);

    return [cart, setCart]
}

export default useCart;