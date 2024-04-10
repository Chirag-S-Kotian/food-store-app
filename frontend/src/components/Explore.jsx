import { menu_list } from "../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-black font-bold text-3xl ">Explore our menu</h1>
      <p className="max-w-xl columns-1 text-red-600">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is to satisfy your cravings and evaluate your dining
        experience,one delicious meal at a time.
      </p>
      <div
        className="flex justify-between items-center gap-8 text-center mt-5 mb-0 overflow-x-scroll"
        style={{ "-webkit-scrollbar": "none" }}
      >
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((p) =>
                  p === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className=""
            >
              <img
                src={item.menu_image}
                alt=""
                style={{
                  width: "7.5vw",
                  cursor: "pointer",
                  borderRadius: "2px solid black",
                  transition: "0.2s",
                  minWidth: "80px",
                }}
                className={
                  category === item.menu_name
                    ? "border-4 border-solid border-red-600 p-0.5 rounded-full"
                    : ""
                }
              />
              <p className="mt-2.5 text-orange-600 text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-2.5 mb-0 h-0.5 bg-slate-400 border-none" />
    </div>
  );
};

export default Explore;
