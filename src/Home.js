import { BrowserRouter as Router, Link } from "react-router-dom";
import colorGenThumbTwo from "./img/colorGenThumbTwo.jpg";
import groceryBudThumb from "./img/groceryBudThumb.jpg";
import loremThumb from "./img/loremThumb.jpg";

const Home = () => {
  return (
    <div>
      {/* TITLE */}
      <div className="text-center my-12 text-4xl font-sans font-semibold text-gray-800 ">
        My Form Projects
        <div className="border-2 border-sky-600 w-16 mx-auto mt-5"></div>
      </div>
      {/* TITLE END */}

      {/* PROJECT GRID */}
      <div className=" w-fit mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          {/* LINKS */}
            {/* IMAGE CONTAINER */}
            <div className="relative my-10 mx-10">
              <Link to="/color-generator">
                <img src={colorGenThumbTwo} alt="" className="img-style-app" />
                <div className="img-hover-overlay">COLOR GENERATOR</div>
              </Link>
            </div>

            <div className="relative my-10 mx-10">
              <Link to="/grocery-bud">
                <img src={groceryBudThumb} alt="" className=" img-style-app" />
                <div className="img-hover-overlay">GROCERY BUD</div>
              </Link>
            </div>

            <div className="relative my-10 mx-10">
              <Link to="/lorem-ipsum-generator">
                <img src={loremThumb} alt="" className="img-style-app" />
                <div className="img-hover-overlay">LOREM-IPSUM GENERATOR</div>
              </Link>
            </div>
        </div>
      </div>
      {/* PROJECT GRID END */}
    </div>
  );
};

export default Home;
