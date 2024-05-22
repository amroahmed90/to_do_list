import React from "react";
import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import { customTheme } from "../../customTheme/theme";
import PersonsHeader from "./Persons/PersonsHeader";
import AddPerson from "./AddPerson/AddPerson";
import Names from "./Names/Names";
import { darken } from "@mui/system";

const useStyles = makeStyles()(() => ({
  navBar: {
    gridColumn: "1 / -1",
    gridRow: "1 / 2",
    display: "grid",
    gridTemplateColumns: "3fr 10fr 1fr",
    gap: "2px",
    backgroundColor: customTheme.palette.background.navbar,
    fontSize: customTheme.fontSize.large,
    textAlign: "center",
    fontWeight: customTheme.fontWeight.bold,
    color: customTheme.fontColor.light,
    boxShadow: `0 5px 20px 0 ${darken(customTheme.palette.background.sidebar, 0.4)}`,
    position: "relative",
    zIndex: 2,
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
