import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Button from "@mui/material/Button";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

const useStyles = makeStyles()(() => ({
  button: {
    flex: 0.5,
    color: customTheme.palette.background.activeTab,
    border: `2px solid ${customTheme.palette.background.activeTab}`,
    borderRadius: customTheme.fontSize.smaller,
    padding: customTheme.padding.small,
    margin: customTheme.padding.small,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: customTheme.palette.background.sidebar,
    },
  },
}));

const AddPerson = () => {
  const { classes } = useStyles();

  return (
    <Button className={classes.button}>
      <PersonAddAlt1Icon fontSize="medium" />
    </Button>
  );
};

export default AddPerson;
