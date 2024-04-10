const Header = () => {
  return (
    <div
      className="h-96 mt-4 mb-auto bg-no-repeat bg-contain relative"
      style={{ height: "34vw", backgroundImage: `url(/header_img.png)` }}
    >
      <div className="absolute flex flex-col items-start gap-4 max-w-xl bottom-10 left-32" style={{ animation:'fadeIn 3s'}}>
        <h2 className="text-white font-medium text-7xl">
          Order your favourite food here
        </h2>
        <p className="text-white text-lg">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button className="border-none text-red-800 font-medium py-3 px-4 bg-white text-sm rounded-3xl">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
