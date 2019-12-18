import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  LOGOUT_USER
} from "./types";
import axios from "axios";

export const registerUser = async (inputs, dispatch) => {
  const payload = inputs;
  const sendDataObject = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/v1/users/register`,
    payload
  );
  const userToken = sendDataObject.data;
  try {
    localStorage.setItem("user-token", JSON.stringify(userToken));
    // this.props.history.push("/dashboard/daniel")`
  } catch (err) {
    console.log(`error for userActions.js ${err}`);
  }
  dispatch({ type: REGISTER_USER, payload: userToken });
};

export const loginUser = async (inputs, dispatch) => {
  const payload = inputs;
  const sendDataObject = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/api/v1/users/login`,
    payload
  );
  const userToken = sendDataObject.data;
  try {
    localStorage.setItem("user-token", JSON.stringify(userToken));
  } catch (err) {
    console.log(`error for userActions.js ${err}`);
  }
  dispatch({ type: LOGIN_USER, payload: userToken });
};

export const getUserProfile = async (dispatch) => {
  const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/getprofile`;
  let userToken = localStorage.getItem("user-token");
  userToken = JSON.parse(userToken);
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "user-token": userToken
    },
    url
  };
  let sendDataObject = await axios(options)
  sendDataObject = sendDataObject.data;
  dispatch({ type: GET_USER_PROFILE, payload: sendDataObject });
};

export const updateUserProfile = async (inputs, dispatch) => {
  const payload = inputs;
  dispatch({ type: UPDATE_USER_PROFILE, payload });
};

export const logoutUser = async (dispatch) => {
  const payload = "";
  dispatch({ type: LOGOUT_USER, payload });
};
