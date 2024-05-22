import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import List from "./List/List";
import SideNavBar from "./SideNavBar/SideNaveBar";

const useStyles = makeStyles()(() => ({
  mainPageContainer: {
    gridColumn: "1 / -1",
    gridRow: "2 / -1",
    display: "grid",
    gridTemplateColumns: "3fr 11fr",
    gridTemplateRows: "auto",
  },
}));

export default function MainPage() {
  const { classes } = useStyles();

  return (
    <Box className={classes.mainPageContainer}>
      <SideNavBar />
      <List />
    </Box>
  );
}
