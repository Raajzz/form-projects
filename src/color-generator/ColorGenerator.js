import React, { useState, useRef, useEffect } from "react";
import Values from 'values.js';

const checkColor = (color) => {
  if (color.length === 4 || color.length === 7) {
    if (/^#[0-9a-fA-F]+$/g.test(color)) {
      return true;
    }
  }
  return false;
};

const Error = () => {
  return <div className="color-gen-alerts">error</div>;
};

// THIS IS THE COMPONENT THAT SHOWS THE COLOR

const ColorDisplay = ({ color, setCopyAlert }) => {
  let dispColors = new Values(color).all(10);
  console.log(dispColors);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 mt-20">
      {dispColors.map((item, index) => {
        return (
          <div
            key={new Date().getTime().toString}
            style={{
              background: `rgb(${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`,
            }}
            className={` w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40  ${
              index < 10 ? "text-gray-800" : "text-white"
            } py-3 pl-3 hover:cursor-pointer`}
            onClick={() => {
              navigator.clipboard.writeText(
                `rgb(${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`
              );
              setCopyAlert(true);
              setTimeout(() => {
                setCopyAlert(false);
              }, 3000);
            }}
          >
            {`${item.weight}%`} <br />
            {`rgb(${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`}
          </div>
        );
      })}
    </div>
  );
};

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [isNotDisplay, setIsNotDisplay] = useState(true);
  const [copyAlert, setCopyAlert] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  });

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("inside click handler");
    if (checkColor(color)) {
      setIsError(false);
      setIsNotDisplay(false);
    } else {
      setIsNotDisplay(false);
      setIsError(true);
    }
  };

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
            onChange={(e) => {
              // setIsNotDisplay is set to true
              // because we should not display any color
              // when the user is writing something
              // As when the user is writing something, the previous value
              // of isNotDisplay will be used while displaying the component
              setIsNotDisplay(true);
              setColor(e.target.value);
            }}
            className={`rounded-l-md bg-gray-200 w-36 px-3 py-1 text-sm sm:text-2xl sm:w-60 
            ${
              color.length === 0
                ? "outline-2"
                : checkColor(color)
                ? "outline-none border-2 border-green-500"
                : "outline-none border-2 border-rose-500"
            }`}
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
            Generate
          </button>
        </div>
      </div>
      {/* INPUT DIV END */}

      {/* COPY ALERT */}
      {copyAlert ? (
        <div className="color-gen-alerts">Copied To Clipboard!</div>
      ) : null}
      {/* COPY ALERT */}

      {/* COLOR DIV BEGIN */}
      {isNotDisplay ? (
        <div className="color-gen-alerts">
          Click Generate to display the color
        </div>
      ) : isError ? (
        <Error />
      ) : (
        <ColorDisplay color={color} setCopyAlert={setCopyAlert} />
      )}
      {/* COLOR DIV END */}
    </div>
  );
};

export default ColorGenerator;
