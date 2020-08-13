import * as types from "../../types/workouts";
import { apiRestRequest } from "../../../api";
import { history } from "../../..";
import { removeToken } from "../../../api/tokenCreator";

// GETALLWORKOUTS
const getAllWorkouts = () => async (dispatch) => {
  dispatch({ type: types.LOADERACTIVATE });
  try {
    const res = await apiRestRequest("GET", "/workouts/allworkouts");
    if (res.status === 200) {
      const result = await res.data;
      console.log(result);
      dispatch({ type: types.GETALLWORKOUTS, payload: result.workouts });
    }
  } catch (e) {
    removeToken();
    history.push("/auth");
  } finally {
    dispatch({ type: types.LOADERDISABLE });
  }
};

// ADD
const addNewWorkout = (date, type, km) => async (dispatch) => {
  try {
    await apiRestRequest("POST", "/workouts/addworkout", {
      date: date,
      type: type,
      km: km,
    });
    history.push("/");
  } catch (e) {
    console.log(e);
  }
};

// DELETE
const deleteWorkout = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETEWORKOUT, payload: id });
    await apiRestRequest("DELETE", "/workouts/delteworkout", { id: id });
  } catch (e) {
    console.log(e);
  }
};

// change
const changeCurrentWorkout = (_id, date, type, km) => async (dispatch) => {
  try {
    dispatch({
      type: types.EDITWORKOUT,
      payload: { _id: _id, date: date, type: type, km: km },
    });
    await apiRestRequest("POST", "/workouts/changeworkout", {
      id: _id,
      date: date,
      type: type,
      km: km,
    });
  } catch (e) {
    console.log(e);
  }
};

export { getAllWorkouts, deleteWorkout, addNewWorkout, changeCurrentWorkout };
