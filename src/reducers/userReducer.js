import { REGISTER_USER, LOGIN_USER, GET_USER_PROFILE, UPDATE_USER_PROFILE, LOGOUT_USER } from "../actions/types";

const initialState = {
  loading: false,
  token: localStorage.getItem("user-token") || "",
  userProfile: {},
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
    case GET_USER_PROFILE: {
      return{
        ...state,
        loading: false,
        userProfile: action.payload
      }
    }
    case UPDATE_USER_PROFILE: {
      return{
        ...state,
        loading: false,
        userProfile: action.payload
      }
    }
    case LOGOUT_USER: {
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
