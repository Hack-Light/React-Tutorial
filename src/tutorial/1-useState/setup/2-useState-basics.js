/* eslint-disable eqeqeq */
import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World");

  const handleClick = () => {
    text == "Hello World" ? setText("Random Text") : setText("Hello World");
  };

  return (
    <>
      <h2>useState basic example</h2>
      <h2>{text}</h2>

      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </>
  );
};

export default UseStateBasics;
