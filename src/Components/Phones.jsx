import React from "react";

export default function Phones(props) {
  const { phones } = props;
  const { names } = props;

  return (
    <div className="  bg-slate-200 rounded-md w-5/6 mt-10 m-auto">
      <div>
        <h1 className="text-slate-800 text-center font-sans text-2xl bg-yellow-600">
          {names}
        </h1>
        <div className=" phone-list  text-slate-800 font-display flex flex-row rounded-md mt-3 justify-around ">
          {phones.map((phones, index) => (
            <div>
              {" "}
              <img
                className="h-48 rounded-md mr-2"
                key={index}
                src={phones.imageUrl}
                alt={phones.name}
              />
              <div className="p-2">
                {" "}
                <h2>{phones.name}</h2>
                <p>{phones.description}</p>
                <h2 className="text-xl font-mono text-black">{phones.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
