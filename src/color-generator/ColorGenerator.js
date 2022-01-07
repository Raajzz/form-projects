import React, { useState, useRef } from "react";

const ColorGenerator = () => {
  const ref = useRef(null);
  const [color, setColor] = useState("");
  const [errorState, setErrorState] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("inside click handler")
    if (ref.current.value.charAt(0) === "#" && ref.current.value.length >= 3 && ref.current.value.length <= 6) {
      setColor(ref.current.value);
      setErrorState(false);
    } else {
      setErrorState(true);
    }
  }

  return (
    <div>
      {/* INPUT */}
      <div className=" my-5 mx-10">
        <span className=" mr-5 text-xl font-semibold md:text-2xl">
          Color Generator
        </span>
        <div className=" my-3 sm:inline">
          <input
            type="text"
            ref={ref}
            className={`rounded-l-md bg-gray-200 w-36 px-3 py-1 text-sm sm:text-2xl sm:w-60
            ${errorState ? " border-2 border-rose-500" : ""}`}
          />
          <button
            className={` 
            rounded-r-md 
            py-1 
            bg-sky-500 
            px-4 text-sm 
            text-white 
            sm:text-2xl
            `}
            onClick={clickHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
