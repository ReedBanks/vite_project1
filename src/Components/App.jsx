import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewEmployee from "./NewEmployee";
import Update from "./Update";
import EmpDelete from "./EmpDelete";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new" element={<NewEmployee />} />
      <Route path="/del" element={<EmpDelete />} />
      <Route path="/up" element={<Update />} />
      
    </Routes>
  );
}
