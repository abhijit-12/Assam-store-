import React, { createContext, useState } from "react";
import all_product from '../Compponents/Assets/all_product'
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
        console.log(cartItems)
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const Item in cartItems) {
            if (cartItems[Item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(Item))
                totalAmount = totalAmount + itemInfo.new_price * cartItems[Item];
            }
            return totalAmount;
        }
    }


    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider