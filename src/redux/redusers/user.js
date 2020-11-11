import { createStore } from "redux";

const initialState = {
  items: {
    name: "Владимир",
    age: 28,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_ON":
      localStorage.setItem("newSession", true);
      const session = localStorage.getItem("newSession");

      return {
        ...state,
        items: action.payload,
      };

    case "LOG_OFF":
      return {
        items: {},
      };

    default:
      return state;
  }
};

const store = createStore(user);

export default store;
