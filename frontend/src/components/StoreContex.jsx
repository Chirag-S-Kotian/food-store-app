import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContex = createContext(null);

const StoreContexProvider = (props) => {
  const contexValue = {
    food_list
  };
  return (
    <StoreContex.Provider value={contexValue}>
      {props.children}
    </StoreContex.Provider>
  );
};

export default StoreContexProvider;
