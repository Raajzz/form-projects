// GROCERY BUD APPLICATION

import React, { useState, useRef, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const App = () => {
  const [item, setItem] = useState([]);
  const refElement = useRef(null);
  const [buttonContent, setButtonContent] = useState("Submit");
  const [editItemId, setEdititemId] = useState("");
  // TO FOCUS, THIS WILL RUN EVERYTIME THE USER DELETES OR EDITS
  // SOMETHING AS IT'S BEING RE-RENDERED

  useEffect(() => {
    refElement.current.focus();
  });

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    if (buttonContent === "Edit") {
      refElement.current.focus();
      setItem(
        item.map((oneItem) => {
          if (oneItem.id === editItemId) {
            return {
              id: editItemId,
              itemName: refElement.current.value,
            };
          } else {
            return oneItem;
          }
        })
      );
      refElement.current.value = "";
      setButtonContent("submit");
      // setItem([...item, {
      //   id:editItemId,
      //   itemName:refElement.current.value
      // }])
    } else {
      setItem([
        ...item,
        {
          id: new Date().getTime().toString(),
          itemName: refElement.current.value,
        },
      ]);
      refElement.current.value = "";
    }
  };

  return (
    <>
      {/* CARD */}
      <div className="rounded bg-white max-w-sm md:max-w-lg shadow-md mx-auto my-32">
        {/* PADDING TO THE INSIDE STUFF */}
        <main className="px-3 pt-6 pb-4">
          {/* HEADING */}
          <h1 className="text-center font-extrabold font-mono text-xl md:text-2xl">
            Grocery Bud
          </h1>
          {/* TEXT FIELD AND BUTTON */}
          <form className="text-center mt-3" onSubmit={inputSubmitHandler}>
            <input
              type="text"
              className="rounded rounded-r-none bg-blue-100 w-60 md:w-80 px-2 h-6 text-md"
              ref={refElement}
              placeholder="Eg. Eggs"
            />
            <button
              className="rounded rounded-l-none 
            bg-blue-300 
            w-14 
            md:w-20 
            h-6 
            text-md 
            hover:bg-blue-500 
            ease-in-out 
            duration-300 
            hover:text-white"
            >
              {buttonContent}
            </button>
          </form>
        </main>
        {/* ITEMS DISPLAY */}
        <div className="pb-3">
          {item.map((indItem) => {
            return (
              <div key={indItem.id} className="relative text-lg pl-20 mb-3">
                <span className="inline-block">{indItem.itemName}</span>
                <div className="inline-block absolute right-20">
                  <button
                    onClick={() => {
                      setButtonContent("Edit");
                      refElement.current.value = indItem.itemName;
                      setEdititemId(indItem.id);
                    }}
                  >
                    <AiOutlineEdit className="inline-block text-green-500 mx-3 hover:text-green-900 hover:linear hover:duration-500" />
                  </button>
                  <button
                    onClick={() => {
                      setItem(
                        item.filter((indItem2) => indItem2.id !== indItem.id)
                      );
                      refElement.current.value = "";
                      refElement.current.focus();
                    }}
                  >
                    <AiOutlineDelete className="inline-block text-red-500 mx-3 hover:text-green-900 hover:linear hover:duration-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <dir className="pb-3">
          
        </dir> */}
      </div>
    </>
  );
};

export default App;
