import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: null,
  loginData: {},
  isLoggedIn: false,
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
