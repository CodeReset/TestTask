import { apiRestRequest } from "../../../api";
import { setToken } from "../../../api/tokenCreator";
import { history } from "../../..";
import * as types from "../../types/auth";

// Signin
const authSighIn = (username, password) => async (dispatch) => {
  const res = await apiRestRequest("POST", "/auth/signin", {
    username: username,
    password: password,
  });
  if (res && res.status === 200) {
    setToken(res.data.token);
    history.push("/");
  }
};

// SignOut
const authSighUp = (username, email, password) => async (dispatch) => {
  const res = await apiRestRequest("POST", "/auth/signup", {
    username: username,
    email: email,
    password: password,
  });
  if (res && res.status === 201) {
    dispatch({ type: types.AUTHTABCHANGER, payload: "signin" });
  }
};

export { authSighIn, authSighUp };
