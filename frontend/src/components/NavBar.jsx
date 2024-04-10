import { useState } from "react"
import { assets } from "../assets/assets"

const NavBar = () => {
  const [menu,setMenu] = useState("home");

  return (
    <div className="py-5 flex justify-between items-center">
        <img src={assets.logo} alt="" className="w-40" />
        <ul className="flex gap-5 text-blue-900 text-lg cursor-pointer">
            <li onClick={() => setMenu("home")} className={menu === "home"?"active:pb-0.5 border-solid border-b-2 border-red-400" :""}>home</li>
            <li onClick={() => setMenu("menu")} className={menu === "menu"?"active:pb-0.5 border-solid border-b-2 border-red-400" :""}>menu</li>
            <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active:pb-0.5 border-solid border-b-2 border-red-400" :""} >mobile-app</li>
            <li onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active:pb-0.5 border-solid border-b-2 border-red-400" :""} >contact us</li>
        </ul>
        <div className="flex items-center gap-10">
            <img src={assets.search_icon} alt="" className=""/>
            <div className="relative">
                <img src={assets.basket_icon} alt="" className="" />
                <div className="absolute min-w-2.5 min-h-2.5 bg-red-500 rounded-md -top-2 -right-2"></div>
            </div>
            <button className="bg-transparent text-base text-blue-950 border-2 border-solid border-red-500 py-1 px-6 rounded-3xl cursor-pointer delay-200 hover:bg-gray-300">sign in</button>
        </div>
    </div>
  )
}

export default NavBar