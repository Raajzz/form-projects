import React, {useState,useRef} from "react";

const LoremGenerator = () => {
  const [numParas, setNumParas] = useState(0);

  const ref = useRef(null)

  const clickHandler = (value) => {
    setNumParas(value);
  }

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
        <button className=" rounded-md bg-sky-500 hover:bg-sky-200 hover:text-sky-500 px-4 py-1 text-gray-700 duration-300 ease-in-out"
        onClick={()=>{clickHandler(ref.current.value)}}
        >
          GENERATE
        </button>
      </div>

      <div>{numParas}</div>


    </div>
  );
};

export default LoremGenerator;
