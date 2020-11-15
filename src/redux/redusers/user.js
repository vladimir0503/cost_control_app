import { createStore } from "redux";

const initialState = {
  user: {},
  total: 0,
  history: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        user: action.payload,
        total: action.payload.total,
        history: action.payload.history,
      };

    case "NEW_OPERATION":
      return {
        ...state,
        history: [...state.history, action.payload],
      };

    case "ADD_SUM":
      return {
        ...state,
        total: state.total + action.payload,
      };

    case "REMOVE_SUM":
      return {
        ...state,
        total: state.total - action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(user);

export default store;
