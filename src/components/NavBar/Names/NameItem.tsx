import Box from "@mui/system/Box";
import React from "react";
import { activePerson } from "../../../signals/signals";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";

// styles
const useStyles = makeStyles()(() => ({
  tab: {
    padding: customTheme.padding.medium,
    flexGrow: 1,
    textAlign: "center",
    cursor: "pointer",
    borderInline: `2px solid ${customTheme.palette.background.navbar}`,
    "&:hover": {
      backgroundColor: customTheme.palette.background.sidebar,
    },
  },
  activeTab: {
    backgroundColor: customTheme.palette.background.sidebar,
    padding: `-${customTheme.padding.medium}`,
    "&:hover": {
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
    marginLeft: customTheme.padding.medium,
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
  const isActivePerson = activePerson.value === id;

  return (
    <Box
      key={id}
      className={`${classes.tab} ${isActivePerson ? classes.activeTab : ""}`}
    >
      <Typography variant="inherit" className={classes.text}>
        {name}
      </Typography>
      {isActivePerson && (
        <span className={classes.iconWrapper}>
          <PersonRemoveIcon className={classes.icon} />
        </span>
      )}
    </Box>
  );
};

export default NameItem;
