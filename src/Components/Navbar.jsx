import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { BiCartDownload } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mt-10 font-sans  text-yellow-600 px-4 py-5 flex justify-around ">
      <Link to="/">
        <h1 className="text-3xl pl-5 font-bold font-font hover:text-slate-300 cursor-pointer">
          <FiShoppingCart className=" float-left hover:text-yellow-600" />m
          <span className="text-slate-300 hover:text-yellow-600 cursor-pointer">
            art
          </span>{" "}
        </h1>
      </Link>

      <div>
        <input
          placeholder="search products & brands"
          className="bg-slate-300  py-2 px-20 font-mono rounded mr-3"
        ></input>
        <button className="rounded bg-yellow-600 text-slate-300 p-2.5 ">
          <FiSearch />
        </button>
      </div>

      <div className="flex list-none  text-lg px-5  ">
        <ul>
          <li
            className="inline-block px-5 relative"
            onClick={handleDropdownClick}
          >
            <Link to="#" className="flex items-center hover:text-slate-300 ">
              <FiUser className="mr-3" /> Account{" "}
              {isOpen ? (
                <BiCaretUp className="ml-2" />
              ) : (
                <AiFillCaretDown className="ml-2" />
              )}
            </Link>
            {isOpen && (
              <ul className="absolute z-40  bg-white text-sm shadow-md rounded mt-2 w-32">
                <li className="px-4 py-2 hover:bg-gray-100 ">
                  <Link to="/signup"> Sign up</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/">Login</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="#">My Orders</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="inline-block px-5">
            <Link
              to="/flash"
              className="flex items-center hover:text-slate-300"
            >
              <BiCartDownload className="mr-2 " /> Flash sale
            </Link>
          </li>
          <li className="inline-block px-5">
            <Link to="#" className="flex items-center hover:text-slate-300">
              <FiHelpCircle className=" mr-2 " />
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
