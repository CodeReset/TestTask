import React from "react";

import Container from "@material-ui/core/Container";

import { useDispatch } from "react-redux";

import "./style.scss";
import BaseHeader from "../../shared/BaseHeader";
import FormCreator from "../../components/FormCreator";
import { addNewWorkout } from "../../store/actions/workouts";

const EditAddPage = () => {
  const dispatch = useDispatch();

  const createWorkout = (date, type, km) => {
    dispatch(addNewWorkout(date, type, km));
  };

  return (
    <>
      <BaseHeader />
      <Container>
        <h1 className="main_heading">Добавить прошедшую тренировку</h1>
        <FormCreator createWorkout={createWorkout} />
      </Container>
    </>
  );
};

export default EditAddPage;
