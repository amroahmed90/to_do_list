import React from "react";
import { makeStyles } from "tss-react/mui";
import { namesWithLists } from "../../../signals/signals";
import NameItem from "./NameItem";

const useStyles = makeStyles()(() => ({
  root: {
    flex: 12,
    display: "flex",
    flexDirection: "row",
  },
}));

const Names = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {namesWithLists.value.map(({ id, name }) => (
        <NameItem key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default Names;
