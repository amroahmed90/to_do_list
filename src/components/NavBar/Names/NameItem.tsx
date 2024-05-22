import React from "react";
import Box from "@mui/system/Box";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { darken, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";
import { usePersonsLists } from "../../../contexts/PeoplesListsContext";
import { useDispatch, useSelector } from "react-redux";
import { removePerson } from "../../../redux/actions";
import { Actions } from "../../../redux/actionTypes";
import { Dispatch } from "@reduxjs/toolkit";
import { Data } from "../../../types/types";

// styles
const useStyles = makeStyles()(() => ({
  tab: {
    padding: customTheme.padding.medium,
    flexGrow: 1,
    textAlign: "center",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: darken(customTheme.palette.background.sidebar, 0.2),
    },
  },
  activeTab: {
    backgroundColor: customTheme.palette.background.sidebar,
    padding: `-${customTheme.padding.medium}`,
    "&:hover": {
      backgroundColor: customTheme.palette.background.sidebar,
      cursor: "default",
    },
  },
  text: {
    display: "inline-block",
  },
  activeText: {
    marginRight: customTheme.padding.medium,
  },
  iconWrapper: {
    display: "inline-block",
    position: "relative",
    padding: customTheme.padding.small,
    width: customTheme.padding.medium,
    height: customTheme.padding.medium,
  },
  icon: {
    // marginLeft: customTheme.padding.medium,
    display: "inline-block",
    position: "absolute",
    top: "0.75rem",
    left: "0.5rem",
    "&:hover": {
      color: customTheme.palette.background.navbar,
      cursor: "pointer",
    },
  },
}));

type NameItemProps = {
  id: string;
  name: string;
};

const NameItem = ({ id, name }: NameItemProps) => {
  const { classes } = useStyles();

  // context
  const { activePerson, updateActivePerson } = usePersonsLists();

  // redux
  const personsWithLists = useSelector((st) => st as Data);
  const dispatch = useDispatch<Dispatch<Actions>>();

  const isActivePerson = React.useMemo(
    () => activePerson?.id === id,
    [activePerson?.id, id],
  );

  const handleRemovePerson = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      dispatch(removePerson({ personId: id }));
      const remainingPersons = personsWithLists.filter(
        (person) => person.id !== id,
      );
      const newActivePersonId =
        remainingPersons.length > 0 ? remainingPersons[0].id : "";

      updateActivePerson(newActivePersonId);
    },
    [dispatch, id, personsWithLists, updateActivePerson],
  );

  return (
    <Box
      key={id}
      className={`${classes.tab} ${isActivePerson ? classes.activeTab : ""}`}
      onClick={() => updateActivePerson(id)}
    >
      <Typography variant="inherit" className={classes.text}>
        {name}
      </Typography>
      {isActivePerson && (
        <Box className={classes.iconWrapper} onClick={handleRemovePerson}>
          <PersonRemoveIcon className={classes.icon} />
        </Box>
      )}
    </Box>
  );
};

export default NameItem;
