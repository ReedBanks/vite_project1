import React from "react";
import { Routes, Route } from "react-router-dom";
import Flashsalespage from "./Flashsalespage";
import Homepage from "./Homepage";
import Homepage2 from "./Homepage2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Homepage2 />} />
      <Route
        path="/flash"
        element={
          <Flashsalespage
            key="id"
            item="item"
            brand="brand"
            price="price"
            image="image"
          />
        }
      />
    </Routes>
  );
}
