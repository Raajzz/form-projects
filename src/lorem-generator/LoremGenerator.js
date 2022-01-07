import React, { useState, useRef } from "react";
import data from "../data/lorem-data";

const Paras = ({ numParas }) => {};

const LoremGenerator = () => {
  const [numParas, setNumParas] = useState(0);
  const ref = useRef(null);
  const clickHandler = (value) => {
    if (value <= 0) {
      setNumParas(1);
    } else if (value > data.length) {
      setNumParas(data.length);
    } else {
      setNumParas(value);
    }
  };

  return (
    <div>
      {/* HEADING */}
      <div className="text-center text-xl my-14 font-bold tracking-wider text-gray-700">
        TIRED OF BORING LOREM IPSUM?
      </div>

      {/* INPUT */}
      <div className=" max-w-fit mx-auto">
        <span className=" text-lg tracking-wide mr-3">Paragraphs:</span>
        <input
          type="number"
          className=" rounded-md bg-gray-200 w-16 px-2 py-1 mr-3"
          ref={ref}
        />
        <button
          className=" rounded-md bg-sky-500 hover:bg-sky-200 hover:text-sky-500 px-4 py-1 text-gray-700 duration-300 ease-in-out"
          onClick={() => {
            clickHandler(ref.current.value);
          }}
        >
          GENERATE
        </button>
      </div>
      <div className=" my-16">
        {data.slice(0, numParas).map((element, index) => {
          return (
            <div
              key={index}
              className=" text-sm mx-auto text-center w-96 sm:w-[32rem] lg:w-[36rem] lg:text-lg mt-10"
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoremGenerator;
