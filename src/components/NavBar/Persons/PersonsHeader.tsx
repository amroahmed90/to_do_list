import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

const useStyles = makeStyles()(() => ({
  header: {
    borderRight: `2px solid ${customTheme.palette.background.activeTab}`,
    width: customTheme.grids.left,
    padding: customTheme.padding.medium,
    flex: 3,
  },
}));

const PersonsHeader = () => {
  const { classes } = useStyles();

  return <Box className={classes.header}>Names</Box>;
};

export default PersonsHeader;
