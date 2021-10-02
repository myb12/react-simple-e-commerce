import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
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

    return [cart, setCart]
}

export default useCart;