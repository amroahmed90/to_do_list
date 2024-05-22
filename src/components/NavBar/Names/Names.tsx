import React from "react";
import { makeStyles } from "tss-react/mui";
import NameItem from "./NameItem";
import { useSelector } from "react-redux";
import { Data } from "../../../types/types";
import { Box } from "@mui/material";

const useStyles = makeStyles()(() => ({
  names: {
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    display: "flex",
    flexDirection: "row",
  },
}));

const Names = () => {
  const { classes } = useStyles();
  const personsWithLists = useSelector((st) => st as Data);

  return (
    <Box className={classes.names}>
      {personsWithLists.map(({ id, name }) => (
        <NameItem key={id} id={id} name={name} />
      ))}
    </Box>
  );
};

export default Names;
