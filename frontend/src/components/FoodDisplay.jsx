import { useContext } from "react";
import { StoreContex } from "./StoreContex";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContex);
  return (
    <div className="">
      <h2 className="">Top dishes near you</h2>
      <div className="">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
