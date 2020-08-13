import React from "react";

import PropTypes from "prop-types";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

import { useStyles } from "./style";

const BottomNavigations = ({ valueControl, setValueControl }) => {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={valueControl}
      onChange={(event, newValue) => {
        setValueControl(newValue);
      }}
      showLabel
      className={classes.root}
    >
      <div className={classes.headigng_auth}>
        <p>{valueControl.toUpperCase()}</p>
      </div>
      <BottomNavigationAction
        className={classes.signin_bottom}
        value="signin"
        icon={<ExitToAppIcon fontSize="large" />}
      />
      <BottomNavigationAction
        className={classes.signin_bottom}
        value="signup"
        icon={<AddBoxOutlinedIcon fontSize="large" />}
      />
    </BottomNavigation>
  );
};

BottomNavigations.propTypes = {
  valueControl: PropTypes.string.isRequired,
  setValueControl: PropTypes.func.isRequired,
};

export default BottomNavigations;
