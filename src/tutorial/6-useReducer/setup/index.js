/* eslint-disable eqeqeq */
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";

let defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Item Added"
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      let newPerson = { id: new Date().toString(), name: name };
      dispatch({ type: "ITEM_ADDED", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>

      {state.people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
