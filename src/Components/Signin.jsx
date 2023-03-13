import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Signin() {
  return (
    <div className="flex flex-col">
      <h1>
        <FiShoppingCart className="text-slate-700 p-3 text-7xl  m-auto" />
      </h1>
      <h2 className=" text-center p-5 text-slate-800 font-mono">
        type in your student ID to login
      </h2>
      <input
        placeholder="Student ID"
        className="bg-slate-300 m-5 mt-0 rounded-sm px-3 py-3 text-slate-800 border-slate-900 "
      ></input>

      <input
        placeholder="password"
        className="bg-slate-300 m-5 mt-0 rounded-sm px-3 py-3  text-slate-800 border-slate-900  "
      ></input>

      <a
        href="#"
        className=" bg-slate-800 rounded text-center font-mono m-5 mt-0 px-20 py-3 hover:cursor-pointer "
      >
        <buttton>Continue</buttton>
      </a>
    </div>
  );
}
