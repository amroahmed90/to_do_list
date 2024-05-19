import React from "react";
import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import { customTheme } from "../../customTheme/theme";
import PersonsHeader from "./Persons/PersonsHeader";
import AddPerson from "./AddPerson/AddPerson";
import Names from "./Names/Names";

const useStyles = makeStyles()(() => ({
  navBar: {
    backgroundColor: customTheme.palette.background.navbar,
    fontSize: customTheme.fontSize.medium,
    textAlign: "center",
    fontWeight: customTheme.fontWeight.bold,
    color: customTheme.fontColor.light,
    display: "flex",
    justifyContent: "space-between",
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.navBar}>
      <PersonsHeader />
      <Names />
      <AddPerson />
    </Box>
  );
};

export default NavBar;
