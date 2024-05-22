import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import List from "./List/List";
import SideNavBar from "./SideNavBar/SideNaveBar";

const useStyles = makeStyles()(() => ({
  mainPageContainer: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
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
