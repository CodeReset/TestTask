import { combineReducers } from "redux";

import auth from "./auth";
import workouts from "./workouts";

const reducer = combineReducers({
  auth,
  workouts,
});

export default reducer;
