import React, { useState } from "react";

const Stateexample = () => {
  const [count, setCount] = useState(0);
  const nemeh = () => {
    setCount(count + 1);
  };
  const hasah = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={nemeh}>Increase count</button>
      <button onClick={hasah}>Decrease count</button>
    </div>
  );
};

export default Stateexample;
