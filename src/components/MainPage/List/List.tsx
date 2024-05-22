import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

// styles
const useStyles = makeStyles()(() => ({
  list: {
    backgroundColor: customTheme.palette.background.activeTab,
    flex: 11.2,
    paddingInline: "5vw",
    paddingBlock: customTheme.padding.larger,
    "&::after": {
      content: `""`,
      display: "block",
      flex: 0.5,
      padding: customTheme.padding.small,
      margin: customTheme.padding.small,
    },
  },
}));

const List = () => {
  // classes
  const { classes } = useStyles();

  return <Box className={classes.list}>List</Box>;
};

export default List;
