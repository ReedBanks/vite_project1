import React from "react";

import { FiUserPlus } from "react-icons/fi";
import { CiBoxList } from "react-icons/Ci";

import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-center flex-row ">
        <div className="flex  justify-center w-5/6 bg-white my-20 drop-shadow-md ">
          <Sidebar />
          <div className="w-4/5 flex flex-col text-slate-800 bg-slate-200">
            <h1 className=" text-amber-700 text-3xl font-body py-5  px-12 drop-shadow-md">
              Dashboard
            </h1>
            <div className="flex flex-row flex-wrap  text-xl">
              <div className=" w-2/5  py-5 m-auto my-7 rounded-md bg-amber-600 drop-shadow-md">
                <Link to="/new">
                  <h1 className="text-center">
                    {" "}
                    <FiUserPlus className="inline-block mr-4 text-slate-800  text-xl" />{" "}
                    New Employee{" "}
                  </h1>
                </Link>
              </div>
              <div className=" w-2/5 text-center  py-5 m-auto my-7 rounded-md bg-amber-600 drop-shadow-md">
                <Link to="/del">
                  {" "}
                  <h1>
                    {" "}
                    <CiBoxList className="inline-block mr-4 text-slate-800  text-xl" />
                    Delete Employee Record
                  </h1>
                </Link>
              </div>
              <img
                src="https://imhogen.com/assests/IMHOprocess.png"
                className="w-70 p-10 drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
