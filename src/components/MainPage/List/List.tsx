import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

// styles
const useStyles = makeStyles()(() => ({
  list: {
    gridColumn: "2 / -1",
    gridRow: "1 / -1",
    backgroundColor: customTheme.palette.background.activeTab,
    paddingInline: "5vw",
    paddingBlock: customTheme.padding.larger,
  },
}));

const List = () => {
  // classes
  const { classes } = useStyles();

  return <Box className={classes.list}>List</Box>;
};

export default List;
