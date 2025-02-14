"use client";

import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("Rendering...", counter);
  console.log("Clicks:", click);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <>
      <h1>
        <span style={{ color: "yellow" }}>{counter}</span>
      </h1>
      <button
        style={{ color: "red", border: "2px solid red", padding: "0.5rem" }}
        onClick={handleClick}
      >
        Click me!
      </button>
      <div>
        I've been clicked <span style={{ color: "green" }}>{click}</span> times.
      </div>
      <button
        style={{ color: "red", border: "2px solid red", padding: "0.5rem" }}
        onClick={() => setClick(0)}
      >
        Reset count.
      </button>
    </>
  );
};

export default State;
