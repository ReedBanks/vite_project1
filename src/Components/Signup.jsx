import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col">
      <h1 className="text-bold font-mono text-center text-slate-800 py-3 ">
        Create New Account
      </h1>
      <input
        placeholder="StudentID"
        className="bg-slate-300 text-slate-800 m-5 mt-0 rounded-sm px-3 py-3 border-slate-900 "
      ></input>

      <input
        placeholder="password"
        className="bg-slate-300 m-5 mt-0 rounded-sm px-3 py-3 text-slate-800 border-slate-900  "
      ></input>
      <input
        placeholder="repeat password"
        className="bg-slate-300 m-5 mt-0 rounded-sm px-3 py-3 text-slate-800 border-slate-900 "
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
