import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(intialValue => intialValue + 1);
  };
  const handleDecrease = () => {
    setValue(intialValue => intialValue - 1);
  };
  const handleReset = () => {
    setValue(0);
  };

  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
      <button className="btn" onClick={handleIncrease}>
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
