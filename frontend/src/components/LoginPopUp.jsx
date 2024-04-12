import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div
      className="absolute w-full h-full grid"
      style={{ zIndex: "1", backgroundColor: "#00000090" }}
    >
      <form
        className="max-w-sm place-self-center text-gray-600 bg-white flex flex-col gap-7 pt-7 py-5 px-7 rounded-xl text-base "
        style={{ animation: "fadeIn 0.5s" }}
      >
        <div className="flex justify-between items-center text-black font-semibold">
          <h2 className="">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-4 cursor-pointer "
          />
        </div>
        <div className="flex flex-col gap-5 ">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-solid border-gray-800 p-2.5 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-solid border-gray-800 p-2.5 rounded"
          />
          <input
            type="password"
            placeholder="Your password"
            required
            className="outline-none border border-solid border-gray-800 p-2.5 rounded"
          />
        </div>
        <button className="border-none p-1 rounded text-white bg-orange-600 text-base cursor-pointer ">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-start gap-2 -mt-4">
          <input type="checkbox" required className="mt-1.5 " />
          <p className="">
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p className="">
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")} className="text-orange-600 font-semibold cursor-pointer">
              Click here
            </span>
          </p>
        ) : (
          <p className="">
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")} className="text-orange-600 font-semibold cursor-pointer">
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
