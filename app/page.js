"use client";

import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import Props from "./components/Props";

const Page = () => {
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  const increaseCount = () => setClick(click + 1);
  const resetCount = () => setClick(0);

  console.log("Rendering...", counter);
  console.log("Clicks:", click);

  const name = "Billy";
  const age = 25;

  return (
    <div>
      <h1>Greetings</h1>
      <Props name={name} age={age} />
      <Button
        color="blue"
        border="2px solid blue"
        text="Click me!"
        onClick={increaseCount}
      />
      <Button
        color="red"
        border="2px solid red"
        text="Reset"
        onClick={resetCount}
      />
      <Display
        click={click}
        counter={counter}
        colorOne="yellow"
        colorTwo="green"
      />
    </div>
  );
};

export default Page;
