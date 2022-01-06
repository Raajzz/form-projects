import react from "react";

const App = () => {
  return (
    <div>
      {/* TITLE */}
      <div className="text-center my-12 text-4xl font-sans font-semibold text-gray-800 ">
        My Form Projects
        <div className=" border-2 border-sky-600 w-16 mx-auto mt-5"></div>
      </div>
      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"></div>
    </div>
  );
};

export default App;
