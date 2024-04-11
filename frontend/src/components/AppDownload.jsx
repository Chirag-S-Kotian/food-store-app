import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="my-auto mt-28 text-4xl  text-center font-semibold">
      <p className="">
        For Better Experience Download <br />
        Elbaf App
      </p>
      <div className="flex justify-center gap-5 mt-10">
        <img
          src={assets.play_store}
          alt=""
          className="w-40 max-w-40 cursor-pointer delay-500 hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt=""
          className="w-40 max-w-40 delay-500 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
