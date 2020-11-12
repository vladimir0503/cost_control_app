import { createStore } from "redux";

const initialState = {
  items: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {
        ...state,
        items: action.payload,
      };

    case 'LOG_OFF':
      return {
        items: {},
      };

    default:
      return state;
  }
};

const store = createStore(user);

export default store;
