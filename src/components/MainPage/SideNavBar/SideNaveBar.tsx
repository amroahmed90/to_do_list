import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

// styles
const useStyles = makeStyles()(() => ({
  sideNavBar: {
    gridColumn: "1 / 2",
    gridRow: "1 / -1",
    boxSizing: "border-box",
    borderRight: `2px solid ${customTheme.palette.background.activeTab}`,
    backgroundColor: customTheme.palette.background.sidebar,
    paddingInline: customTheme.padding.medium,
    paddingBlock: customTheme.padding.larger,
    height: "100vh",
  },
}));
const SideNavBar = () => {
  // classes
  const { classes } = useStyles();

  return <Box className={classes.sideNavBar}>SideNavBar</Box>;
};

export default SideNavBar;
