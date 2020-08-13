import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { SignInSchema } from "./validationScemas/SignInSchema";

import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./style";

const AuthSignIn = ({ handleSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, action) => {
        // console.log(values.username);
        // console.log(values.password);
        handleSubmit(values.username, values.password);
        action.resetForm();
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
            label="Password"
            variant="outlined"
            type="password"
            value={props.values.password}
            onChange={props.handleChange("password")}
            className={classes.root_input}
          />
          <Button className={classes.root_button} type="submit">
            signin
          </Button>
        </form>
      )}
    </Formik>
  );
};

AuthSignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AuthSignIn;
