import React from "react";

import CopyrightIcon from "@material-ui/icons/Copyright";

import { useStyles } from "./style";

const CopyRight = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.root_paragraph}>BestRunner 2020</p>
      <CopyrightIcon />
    </div>
  );
};

export default CopyRight;
