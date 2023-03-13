import Category from "./Category";
import categorys from "./categorylist";

import Signin from "./Signin";

const Catlist = ({ categories }) => {
  return (
    <div className=" flex  mt-2 w-5/6   m-auto">
      <div className="relative   right-5  w-80  py-4 font-mono text-md bg-slate-300 rounded shadow-2xl text-black">
        {categorys.map((category) => (
          <Category
            key={category.id}
            name={category.category}
            url={category.url}
            icon={category.icon}
          />
        ))}
      </div>
      <div className=" w-3/6 bg-yellow-600 ">
        <img src="../images/trenndy_wears_dr.png" alt="image"></img>
      </div>
      <div className="flex justify-center flex-col relative left-5 w-96 rounded  bg-yellow-500 ">
        <Signin />
      </div>
    </div>
  );
};

export default Catlist;
