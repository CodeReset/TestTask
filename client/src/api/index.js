import Axios from "axios";
import config from "./config";
import { getToken } from "./tokenCreator";

const apiRestRequest = async (method, endpoint, body = null) => {
  try {
    const res = await Axios({
      method: method,
      url: config.api + endpoint,
      headers: { Authorization: "Bearer " + getToken() },
      data: body,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export { apiRestRequest };
