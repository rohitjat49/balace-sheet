import React from "react";
import Balancesheet from "./App/Balance-sheet/Balancesheet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App/Router/Home";
import Navbar from "./App/Router/Navbar";

function App() {
  return (
    <div>
      {/* <Balancesheet /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Balancesheet />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
