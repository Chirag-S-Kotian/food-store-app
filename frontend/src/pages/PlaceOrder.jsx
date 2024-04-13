import { useContext } from "react";
import { StoreContex } from "../components/StoreContex";

const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContex);

  return (
    <form className="flex items-start justify-between gap-14 mt-28 ">
      <div className="w-full max-w-lg ">
        <p className="font-semibold text-3xl mb-14">Delivery Information</p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
        />
        <input
          type="text"
          placeholder="street"
          className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
          />
          <input
            type="text"
            placeholder="State"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip Code"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
          />
        </div>
        <input
          type="number"
          placeholder="phone"
          className="w-full mb-4 p-3 border border-solid border-gray-600 rounded outline-orange-600 "
        />
      </div>

      {/*for right side div */}
      <div className="w-full max-w-lg">
        <div className="flex-1 flex flex-col gap-6 pr-8">
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
              <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
            </div>
          </div>
          <button className="border-none text-white bg-orange-600 w-52 pt-2 pb-2 text-sm rounded cursor-pointer mt-8">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
