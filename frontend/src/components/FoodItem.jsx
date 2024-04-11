import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContex } from "./StoreContex";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContex);

  return (
    <div
      className="w-full m-auto rounded-2xl delay-300"
      style={{ boxShadow: "0px 0px 10px #000015", animation: "fadeIn 1s" }}
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full "
          style={{ borderRadius: "15px 15px 0px 0px" }}
        />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            style={{ borderRadius: "50%" }}
            className="w-9 absolute bottom-4 right-4 cursor-pointer"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center p-1.5 gap-2.5 rounded-full bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-8"
            />
            <p className="">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-8"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-20" />
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-red-600 text-2xl font-semibold mt-2.5 mb-0">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
