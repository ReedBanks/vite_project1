import React, { useState } from "react";

export default function Order1(props) {
  const [count, setCount] = useState(1);
  const [setprice, setPrice] = useState(parseFloat(props.price));
  return (
    <div>
      <div className="w-4/6 my-10 flex felx-row m-auto rounded-sm bg-slate-100 ">
        <img
          className="w-80 h-80 m-3 rounded-md"
          src={props.image}
          alt="image"
        />

        <div className="m-5">
          <h1 className="text-black text-2xl">{props.item}</h1>
          <h2 className="text-black m-2 ">{props.brand}</h2>
          <hr></hr>
          <h1 className="text-black text-3xl text-bold pt-2 font-mono">
            {"GH₵" + props.price}
          </h1>
          <h1 className="text-black font-mono mt-3 text-xl ">
            Quantity: {count}
          </h1>
          <div className=" flex flex-row mt-3 ">
            <button
              className="bg-yellow-600 py-1 px-3 rounded-md mr-5 text-xl text-black font-sans"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
                if (setprice > props.price) {
                  setPrice(setprice - parseFloat(props.price));
                }
              }}
            >
              -
            </button>
            <button
              className="bg-yellow-600 py-1 px-2.5 ml-4 rounded-md mr-5 text-xl text-black font-sans"
              onClick={() => {
                setCount(count + 1);
                setPrice(setprice + parseFloat(props.price));
              }}
            >
              {" "}
              +
            </button>
          </div>
          <hr className="mt-2"></hr>
          <button className="bg-yellow-600 mt-10 py-3 px-10 rounded-md text-black font-display font-bold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
