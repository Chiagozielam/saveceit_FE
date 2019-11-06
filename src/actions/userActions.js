import { REGISTER_USER, LOGIN_USER, GET_USER } from "./types";
import axios from "axios";

export const registerUser = async(inputs, dispatch) => {
    const payload = inputs;
    const sendDataObject = await axios.post(
      "//localhost:5000/api/v1/users/register",
      payload
    );
    const userToken = sendDataObject.data
    try{
        localStorage.setItem("user-token", JSON.stringify(userToken))
        // this.props.history.push("/dashboard/daniel")`
    }
    catch(err){
        console.log(`error for userActions.js ${err}`)
    }
    dispatch({ type: REGISTER_USER, payload: userToken });
};

export const loginUser = async (inputs, dispatch) => {
    const payload = inputs;
    const sendDataObject = await axios.post(
      "//localhost:5000/api/v1/users/login",
      payload
    );
    const userToken = sendDataObject.data
    try{
        localStorage.setItem("user-token", JSON.stringify(userToken)) 
    }
    catch(err){
        console.log(`error for userActions.js ${err}`)
    }
  dispatch({ type: LOGIN_USER, payload: userToken });
};
