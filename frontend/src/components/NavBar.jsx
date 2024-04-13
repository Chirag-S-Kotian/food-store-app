import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContex } from "./StoreContex";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalAmount } = useContext(StoreContex);

  return (
    <div className="py-5 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-40" />
      </Link>
      <ul className="flex gap-5 text-blue-900 text-lg cursor-pointer">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "active:pb-0.5 border-solid border-b-2 border-red-400"
              : ""
          }
        >
          home
        </Link>
        <a
          href="#Explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "active:pb-0.5 border-solid border-b-2 border-red-400"
              : ""
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "active:pb-0.5 border-solid border-b-2 border-red-400"
              : ""
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "active:pb-0.5 border-solid border-b-2 border-red-400"
              : ""
          }
        >
          contact us
        </a>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" className="" />
        <div className="relative ">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" className="" />
          </Link>
          <div
            className={
              getTotalAmount() === 0
                ? ""
                : "absolute min-w-2.5 min-h-2.5 bg-red-500 rounded-md -top-2 -right-2"
            }
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-base text-blue-950 border-2 border-solid border-red-500 py-1 px-6 rounded-3xl cursor-pointer delay-200 hover:bg-gray-300"
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
