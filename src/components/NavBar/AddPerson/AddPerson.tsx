import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Button from "@mui/material/Button";
import { makeStyles } from "tss-react/mui";
import { customTheme } from "../../../customTheme/theme";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import { useDispatch } from "react-redux";
import { Actions } from "../../../redux/actionTypes";
import { Dispatch } from "@reduxjs/toolkit";
import { addPerson } from "../../../redux/actions";

const useStyles = makeStyles()(() => ({
  dialog: {
    "& form": {
      padding: customTheme.padding.medium,
      backgroundColor: customTheme.palette.background.mainPage,
      color: customTheme.fontColor.light,
      "& button": {
        backgroundColor: customTheme.palette.background.navbar,
        color: customTheme.fontColor.light,
        fontWeight: customTheme.fontWeight.bold,
      },
    },
  },
  dialogTitle: {
    color: customTheme.fontColor.light,
    fontWeight: customTheme.fontWeight.bolder,
    backgroundColor: customTheme.palette.background.navbar,
    borderRadius: "5px",
    marginBottom: customTheme.padding.small,
    userSelect: "none",
  },
  focused: {
    "& .Mui-focused": {
      color: customTheme.palette.background.navbar,
    },
    "& .MuiInputBase-root::after": {
      borderBottom: `2px solid ${customTheme.palette.background.navbar}`,
    },
  },
  button: {
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
    backgroundColor: customTheme.palette.background.dark,
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

  // redux
  const dispatch = useDispatch<Dispatch<Actions>>();

  // local states
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    const newName = Object.values(formJson)[0] as string;
    dispatch(addPerson({ personName: newName }));
    handleCloseDialog();
  };

  return (
    <React.Fragment>
      <Button className={classes.button} onClick={handleOpenDialog}>
        <PersonAddAlt1Icon fontSize="medium" />
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        className={classes.dialog}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >
        <DialogTitle className={classes.dialogTitle}>
          New Person's Name
        </DialogTitle>
        <TextField
          spellCheck="false"
          autoFocus
          required
          margin="dense"
          id="new-person-name"
          name="new-person-name"
          label="Type a name to add..."
          type="text"
          fullWidth
          variant="standard"
          className={classes.focused}
          InputLabelProps={{
            style: {
              color: customTheme.fontColor.light,
            },
          }}
          InputProps={{
            style: {
              color: customTheme.fontColor.light,
            },
          }}
        />
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddPerson;
