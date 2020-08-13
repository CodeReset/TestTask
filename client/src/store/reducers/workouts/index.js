import * as types from "../../types/workouts";

const initialState = {
  workouts: [],
  visibilityFilter: "SHOW_ALL",
  filterValueSearcher: "",
  loader: false,
};

const workouts = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADERACTIVATE:
      return {
        ...state,
        loader: true,
      };

    case types.LOADERDISABLE:
      return {
        ...state,
        loader: false,
      };

    case types.GETALLWORKOUTS:
      return {
        ...state,
        workouts: action.payload,
      };

    case types.SORTWORKOUT:
      return {
        ...state,
        visibilityFilter: action.payload,
      };

    case types.FILTERWORKOUT:
      return {
        ...state,
        visibilityFilter: "FILTERBY_VALUE",
        filterValueSearcher: action.payload,
      };

    case types.ADDNEWWORKOUT:
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      };

    case types.EDITWORKOUT:
      return {
        ...state,
        workouts: state.workouts.map((workout) => {
          if (workout._id === action.payload._id) {
            return action.payload;
          }
          return workout;
        }),
      };

    case types.DELETEWORKOUT:
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default workouts;
