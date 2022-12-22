import React from "react";
import Balancesheet from "./App/Balance-sheet/Balancesheet";
import Ragister from "../src/App/Balance-sheet/Ragister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Router/Home";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Balancesheet /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ragister />} />
          <Route path="/sheet" element={<Balancesheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
