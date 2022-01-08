import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoremGenerator from "./lorem-generator/LoremGenerator";
import ColorGenerator from "./color-generator/ColorGenerator";
import GroceryBud from "./grocery-bud/GroceryBud";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/color-generator" element={<ColorGenerator />} />
          <Route path="/grocery-bud" element={<GroceryBud />} />
          <Route path="/lorem-ipsum-generator" element={<LoremGenerator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
