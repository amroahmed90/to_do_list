import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

const useStyles = makeStyles()(() => ({
  header: {
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
    alignContent: "center",
    alignSelf: "stretch",
    backgroundColor: customTheme.palette.background.dark,
    borderRight: `2px solid ${customTheme.palette.background.activeTab}`,
    borderBottom: `2px solid ${customTheme.palette.background.activeTab}`,
    padding: customTheme.padding.medium,
  },
}));

const PersonsHeader = () => {
  const { classes } = useStyles();

  return <Box className={classes.header}>Names</Box>;
};

export default PersonsHeader;
