/* eslint-disable eqeqeq */
export const reducer = (state, action) => {
  if (action.type == "ITEM_ADDED") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added"
    };
  }
  if (action.type == "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value"
    };
  }
  if (action.type == "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type == "DELETE") {
    const newPeople = state.people.filter(
      person => person.id != action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Deleted"
    };
  }
};
