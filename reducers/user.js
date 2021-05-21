export const initialState = {
  user: null,
  loginData: {},
  isLoggedIn: false,
  footerActive: 1,
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const footerAction = (data) => {
  return {
    type: "FOOTER_CHANGE",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "FOOTER_CHANGE":
      return {
        ...state,
        footerActive: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
