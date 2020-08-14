import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Container from "@material-ui/core/Container";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import TableWorkout from "../../components/TableWorkout";
import BaseHeader from "../../shared/BaseHeader";
import {
  deleteWorkout,
  changeCurrentWorkout,
  getAllWorkouts,
} from "../../store/actions/workouts";
import * as types from "../../store/types/workouts";
import { getVisibleTodos } from "./selectorSort";
import ModalEdit from "../../components/ModalEdit";
import Spiner from "../../components/Spiner";
import { useStyles } from "./style";
import "./style.scss";

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const workouts = useSelector((state) => getVisibleTodos(state.workouts));
  const loader = useSelector((state) => state.workouts.loader);

  const [filterEdit, setFilterEdit] = useState("");
  const [open, setOpen] = useState(false);
  const [editElement, setEditElement] = useState({
    date: "",
    type: "",
    km: "",
    id: "",
  });

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, [dispatch]);

  const deleteItemWorkout = (id) => {
    dispatch(deleteWorkout(id));
  };

  const sortItemWorkout = (sorted_info) => {
    dispatch({ type: types.SORTWORKOUT, payload: sorted_info });
  };

  const changeFilterEdit = (value) => {
    setFilterEdit(value);
  };

  const keypressFilterEdit = (e) => {
    if (e.keyCode === 13 && filterEdit.trim()) {
      dispatch({ type: types.FILTERWORKOUT, payload: filterEdit });
      setFilterEdit("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (date, type, km, id) => {
    setEditElement({ ...editElement, date: date, type: type, km: km, id: id });
    setOpen(true);
  };

  const editCurrentWorkout = (_id, date, type, km) => {
    dispatch(changeCurrentWorkout(_id, date, type, km));
    setOpen(false);
  };

  return (
    <>
      <BaseHeader />
      <Container>
        <h1 className="main_heading">Таблица прошедших тренировок</h1>
        {loader ? (
          <Spiner />
        ) : (
          <TableWorkout
            rows={workouts}
            deleteItem={deleteItemWorkout}
            sortWorkouts={sortItemWorkout}
            filterValue={filterEdit}
            handleChangeFilter={changeFilterEdit}
            handleKeyPressFilter={keypressFilterEdit}
            handleOpen={handleOpen}
          />
        )}

        <Link to="/addedit">
          <AddCircleIcon className={classes.cirtle_add} />
        </Link>
      </Container>
      <ModalEdit
        open={open}
        handleClose={handleClose}
        editElement={editElement}
        editCurrentWorkout={editCurrentWorkout}
      />
      <div className="charts_wrapper">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: {
              text: "График по Километрам",
            },
            series: [
              {
                data: workouts.map((workout) => workout.km),
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default MainPage;
