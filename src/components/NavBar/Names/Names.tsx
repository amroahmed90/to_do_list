import React from "react";
import { makeStyles } from "tss-react/mui";
import NameItem from "./NameItem";
import { useSelector } from "react-redux";
import { Data } from "../../../types/types";

const useStyles = makeStyles()(() => ({
  root: {
    flex: 12,
    display: "flex",
    flexDirection: "row",
  },
}));

const Names = () => {
  const { classes } = useStyles();
  const personsWithLists = useSelector((st) => st as Data);

  return (
    <div className={classes.root}>
      {personsWithLists.map(({ id, name }) => (
        <NameItem key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default Names;
