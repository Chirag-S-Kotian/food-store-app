import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className="text-red-400 bg-gray-800 flex flex-col items-center gap-8 p-20 pt-5 pb-8 mt-24">
      <div
        className="w-full grid gap-20"
        style={{ gridTemplateColumns: "2fr 1fr 1fr " }}
      >
        <div className="flex flex-col items-start gap-5 ">
          <img src={assets.logo} alt="" className="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur, non incidunt dolor, corporis voluptates reiciendis aliquam
            dolore sit dignissimos impedit. Nulla neque eius incidunt explicabo
            rem nisi, sunt nobis.
          </p>
          <div className="flex mr-4 w-10 ">
            <img src={assets.facebook_icon} alt="" className="" />
            <img src={assets.twitter_icon} alt="" className="" />
            <img src={assets.linkedin_icon} alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-white">COMPANY</h2>
          <ul className="list-none mb-2.5">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul className="list-none mb-2.5">
            <li className="">+91-453-635-8907</li>
            <li className="">Contact@Elbaf.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 mt-5 mb-0 bg-gray-700 border-none" />
      <p className="">Copyright 2024 ©️ Elbaf.com - All Right Resesrved.</p>
    </div>
  );
};

export default Footer;
