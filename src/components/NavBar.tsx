import React from "react";
import { makeStyles } from "tss-react/mui";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

  return <Paper className={classes.root}>NavBar</Paper>;
};

export default NavBar;
