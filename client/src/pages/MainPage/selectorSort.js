import { createSelector } from "reselect";

const getFilterOrSort = (state) => state.visibilityFilter;
const getWorkouts = (state) => state.workouts;
const getFilterValue = (state) => state.filterValueSearcher;

export const getVisibleTodos = createSelector(
  [getFilterOrSort, getWorkouts, getFilterValue],
  (visibilityFilter, workouts, filterValueSearcher) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return workouts;

      case "SHOW_SORTED_KM":
        return workouts.concat().sort((a, b) => {
          if (a.km > b.km) {
            return -1;
          } else if (a.km < b.km) {
            return 1;
          } else {
            return 0;
          }
        });

      case "SHOW_SORTED_DATE":
        return workouts.concat().sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

      case "FILTERBY_VALUE":
        return workouts.filter(
          (workout) => workout.type === filterValueSearcher
        );

      default:
        return workouts;
    }
  }
);
