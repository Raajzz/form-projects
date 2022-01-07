import React, { useState, useRef, useEffect } from "react";
import Values from 'values.js';

const checkColor = (color) => {
  if(color.length === 4 || color.length === 7){
    if(/^#[0-9a-fA-F]+$/g.test(color)){
      return true;
    }
  }
  return false;
}

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [errorState, setErrorState] = useState(false);
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  })

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("inside click handler")
    if (checkColor(color)) {
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
            value={color}
            onChange={(e)=>{
              setColor(e.target.value);
            }}
            className={`rounded-l-md bg-gray-200 w-36 px-3 py-1 text-sm sm:text-2xl sm:w-60
            outline-0
            ${(color.length === 0)?"outline-1":checkColor(color)?" border-2 border-green-500" : " border-2 border-rose-500"}`}
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
