import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Onoh Somtochukwu",
    age: 21,
    message: "Random Message"
  });

  const changeMessage = () => {
    setPeople({ ...people, message: "Hello, I am Light" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
