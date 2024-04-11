import { useContext } from "react";
import { StoreContex } from "./StoreContex";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContex);
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold">Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-8 gap-8 gap-y-14">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
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
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
