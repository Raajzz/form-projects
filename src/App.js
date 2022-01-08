import react from "react";
import LoremGenerator from "./lorem-generator/LoremGenerator";
import ColorGenerator from "./color-generator/ColorGenerator";
import GroceryBud from "./grocery-bud/GroceryBud";
import { BrowserRouter as Router, Link } from "react-router-dom";
import colorGenThumb from "./img/colorGenThumb.jpg";
import groceryBudThumb from "./img/groceryBudThumb.jpg";
import loremThumb from "./img/loremThumb.jpg";

const App = () => {
  return (
    <div>
      {/* TITLE */}
      <div className="text-center my-12 text-4xl font-sans font-semibold text-gray-800 ">
        My Form Projects
        <div className=" border-2 border-sky-600 w-16 mx-auto mt-5"></div>
      </div>
      {/* PROJECT GRID */}
      <div className=" w-fit mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <Router>
            <Link to="#">
              <img src={colorGenThumb} alt="" className=" img-style-app" />
            </Link>
            <Link to="#">
              <img src={groceryBudThumb} alt="" className=" img-style-app" />
            </Link>
            <Link to="#">
              <img src={loremThumb} alt="" className=" img-style-app" />
            </Link>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
