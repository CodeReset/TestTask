import React from "react";

import PropTypes from "prop-types";
import { Formik } from "formik";

import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./style";
import { FormSchema } from "./helper/FormSchema";

const FormCreator = ({ createWorkout }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        date: "",
        trainType: "",
        km: 0,
      }}
      validationSchema={FormSchema}
      onSubmit={(values, action) => {
        createWorkout(values.date, values.trainType, values.km);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="date"
            value={props.values.date}
            onChange={props.handleChange("date")}
            className={classes.date_input}
          />
          <TextField
            required
            label="TrainType"
            variant="outlined"
            value={props.values.trainType}
            onChange={props.handleChange("trainType")}
            className={classes.root_input}
          />
          <TextField
            required
            label="km"
            variant="outlined"
            value={props.values.km}
            type="number"
            onChange={props.handleChange("km")}
            className={classes.root_input}
          />
          <Button className={classes.root_button} type="submit">
            CREATE
          </Button>
        </form>
      )}
    </Formik>
  );
};

FormCreator.propTypes = {
  createWorkout: PropTypes.func.isRequired,
};

export default FormCreator;
