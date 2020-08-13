import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { SignUpScema } from "./validationScemas/SignUpScema";

import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./style";

const AuthSignUp = ({ handleSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={SignUpScema}
      onSubmit={(values, action) => {
        if (values.password === values.passwordConfirm) {
          handleSubmit(values.username, values.email, values.password);
          // action.resetForm();
        }
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <TextField
            required
            label="Username"
            variant="outlined"
            value={props.values.username}
            onChange={props.handleChange("username")}
            className={classes.root_input}
          />
          <TextField
            required
            label="Email"
            variant="outlined"
            value={props.values.email}
            onChange={props.handleChange("email")}
            className={classes.root_input}
          />
          <TextField
            required
            label="Password"
            variant="outlined"
            value={props.values.password}
            type="password"
            onChange={props.handleChange("password")}
            className={classes.root_input}
          />
          <TextField
            required
            label="Confirm"
            variant="outlined"
            value={props.values.passwordConfirm}
            type="password"
            onChange={props.handleChange("passwordConfirm")}
            className={classes.root_input}
          />
          <Button className={classes.root_button} type="submit">
            signup
          </Button>
        </form>
      )}
    </Formik>
  );
};

AuthSignUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default AuthSignUp;
