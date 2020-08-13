import * as types from "../../types/auth";

const initialState = {
  currentTab: "signin",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHTABCHANGER:
      return {
        ...state,
        currentTab: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
