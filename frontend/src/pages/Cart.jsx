import { useContext } from "react";
import { StoreContex } from "../components/StoreContex";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContex);

  return (
    <div className="mt-28">
      <div className="">
        <div
          className="grid items-center text-gray-700 text-lg "
          style={{ gridTemplateColumns: "1fr 1.5fr 1fr 1fr 1fr 0.5fr" }}
        >
          <p className="">Items</p>
          <p className="">Title</p>
          <p className="">Price</p>
          <p className="">Quantity</p>
          <p className="">Total</p>
          <p className="">Remove</p>
        </div>
        <br />
        <hr className="" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="">
                <div className="my-6 flex justify-between items-center text-black">
                  <img src={item.image} alt="" className="w-14" />
                  <p className="">{item.name}</p>
                  <p className="">${item.price}</p>
                  <p className="">{cartItems[item._id]}</p>
                  <p className="">${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer">x</p>
                </div>
                <hr className="h-0.5 bg-gray-300  border-none" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
