/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = id => {
    let newPeople = people.filter(person => person.id != id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Clear</button>
          </div>
        );
      })}
      {people.length != 0 && (
        <button className="btn" onClick={() => setPeople([])}>
          Clear People
        </button>
      )}
    </>
  );
};

export default UseStateArray;
