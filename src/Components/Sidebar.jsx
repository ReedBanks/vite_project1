import React from "react";
import { FaHome } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { CiBoxList } from "react-icons/Ci";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiCoinStack } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="w-1/5  ">
      <img
        src="https://imhogen.com/assests/imhologo.png"
        className="  text-center m-auto w-40 py-5 px-10 drop-shadow-md"
      />
      <hr></hr>
      <ul className="text-amber-700 font-body ml-10 my-20 ">
        <Link to="/">
          <li className="my-5 drop-shadow-md ">
            <FaHome className="inline-block mr-2 text-amber-600 text-xl drop-shadow-md" />{" "}
            Home
          </li>
        </Link>
        <Link to="/new">
          <li className="my-5 drop-shadow-md">
            <FiUserPlus className="inline-block mr-4 text-amber-600 text-xl drop-shadow-md" />
            New Employee
          </li>
        </Link>
        <Link to="/del">
          <li className="my-5 drop-shadow-md">
            {" "}
            <BiTrash className="inline-block mr-4 text-amber-600 text-xl drop-shadow-md" />
            Delete
          </li>
        </Link>
        <Link to="/up">
          <li className="my-5 drop-shadow-md">
            {" "}
            <BiCoinStack className="inline-block mr-4 text-amber-600 text-xl drop-shadow-md" />
            Update
          </li>
        </Link>
      </ul>
    </div>
  );
}
