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

  useEffect(() => {

  },[cartItems])

  const contexValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContex.Provider value={contexValue}>
      {props.children}
    </StoreContex.Provider>
  );
};

export default StoreContexProvider;
