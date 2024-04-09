import React from 'react'
import { assets } from "../assets/assets"

const NavBar = () => {
  return (
    <div className="py-5 flex justify-between items-center">
        <img src={assets.logo} alt="" className="w-40" />
        <ul className="flex gap-5 text-blue-900 text-lg">
            <li className="">home</li>
            <li className="">menu</li>
            <li className="">mobile-app</li>
            <li className="">contact us</li>
        </ul>
        <div className="flex items-center gap-10">
            <img src={assets.search_icon} alt="" className=""/>
            <div className="">
                <img src={assets.basket_icon} alt="" className="" />
                <div className=""></div>
            </div>
            <button className="bg-transparent text-base text-blue-950 border-2 border-solid border-red-500 py-1 px-6 rounded-3xl cursor-pointer delay-200 hover:bg-gray-300">sign in</button>
        </div>
    </div>
  )
}

export default NavBar