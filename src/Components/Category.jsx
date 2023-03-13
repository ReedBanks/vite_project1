import React from "react";

const Category = ({ name, url }) => {
  return (
    <div>
      <ul>
        <a href={url}>
          <li className="pl-5 hover:text-yellow-600  ">{name}</li>{" "}
        </a>
      </ul>
    </div>
  );
};

export default Category;
