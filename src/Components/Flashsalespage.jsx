import React from "react";
import Navbar from "./Navbar";
import Order1 from "./Order1";
import order from "./order";

export default function Flashsalespage() {
  return (
    <div>
      <Navbar />
      {order.map((order) => {
        return (
          <Order1
            key={order.id}
            item={order.item}
            brand={order.brand}
            price={order.price}
            image={order.image}
          />
        );
      })}
    </div>
  );
}
