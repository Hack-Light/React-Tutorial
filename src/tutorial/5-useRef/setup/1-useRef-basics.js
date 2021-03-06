import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  let refContainer = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
