import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContex = createContext(null);

const StoreContexProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((p) => ({ ...p, [itemId]: 1 }));
    } else {
      setCartItems((p) => ({ ...p, [itemId]: p[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((p) => ({ ...p, [itemId]: p[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contexValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount
  };
  return (
    <StoreContex.Provider value={contexValue}>
      {props.children}
    </StoreContex.Provider>
  );
};

export default StoreContexProvider;
