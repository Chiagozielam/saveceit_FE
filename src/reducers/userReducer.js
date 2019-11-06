import { REGISTER_USER, LOGIN_USER } from "../actions/types";

const initialState = {
  loading: false,
  token: localStorage.getItem("user-token") || ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return{
        ...state,
        loading: false,
        token: action.payload
      }
    }
    case LOGIN_USER: {
      return{
        ...state,
        loading: false,
        token: action.payload
      }
    }
    default:
      return state;

    }
};
