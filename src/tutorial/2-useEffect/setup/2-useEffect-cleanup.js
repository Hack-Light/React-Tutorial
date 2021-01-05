import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("effect");
    window.addEventListener("resize", checkSize);

    /* return () => {
      window.removeEventListener("resize", checkSize);
      console.log("remove");
    }; */
  }, []);
  console.log("render");
  return (
    <>
      <h1>Window</h1>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
