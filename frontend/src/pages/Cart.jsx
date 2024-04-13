import { useContext } from "react";
import { StoreContex } from "../components/StoreContex";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } =
    useContext(StoreContex);

  const navigate = useNavigate();

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
              <div key={index} className="">
                <div className="my-6 flex justify-between items-center text-black">
                  <img src={item.image} alt="" className="w-14" />
                  <p className="">{item.name}</p>
                  <p className="">${item.price}</p>
                  <p className="">{cartItems[item._id]}</p>
                  <p className="">${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-0.5 bg-gray-300  border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-8">
        <div className="flex-1 flex flex-col gap-6 pr-32">
          <h2 className="">Cart Total</h2>
          <div className="">
            <div className=" text-gray-600 flex justify-between">
              <p className="">Sub Total</p>
              <p className="">${getTotalAmount()}</p>
            </div>
            <hr className="mt-3 mb-2" />
            <div className=" text-gray-600 flex justify-between">
              <p className="">Delivery Fee</p>
              <p className="">${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="mt-3 mb-2" />
            <div className=" text-gray-600 flex justify-between">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-white bg-orange-600 w-52 pt-2 pb-2 text-sm rounded cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 pl-9">
          <div className="">
            <p className="text-gray-700">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-3 flex justify-between items-center bg-yellow-200 rounded ">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none pl-3 "
              />
              <button className="w-40 pt-3 pb-1.5 bg-black border-none text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
