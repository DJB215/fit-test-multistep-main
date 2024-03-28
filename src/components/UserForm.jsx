import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const UserForm = (props) => {
  const [open, openchange] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [campuskey, setCampuskey] = useState("");
  const [accesslevel, setAccesslevel] = useState("");
  const [location, setLocation] = useState("");

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  return (
    <div style={{ textAlign: "left" }}>
      <Button onClick={functionopenpopup} color="primary" variant="contained">
        Open Popup
      </Button>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Add New User
          <IconButton onClick={closepopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFirstname("");
              setLastname("");
              setCampuskey("");
              setAccesslevel("");
              setLocation("");
              props.newUser(
                firstname,
                lastname,
                campuskey,
                accesslevel,
                location
              );
            }}
            id="editmodal"
          >
            <Stack spacing={2} margin={2}>
              <TextField variant="outlined" label="First Name"></TextField>
              <TextField variant="outlined" label="Last Name"></TextField>
              <TextField variant="outlined" label="Campus Key"></TextField>
              <TextField variant="outlined" label="Access Level"></TextField>
              <TextField variant="outlined" label="Location"></TextField>
              <FormControlLabel
                control={<Checkbox defaultChecked color="primary"></Checkbox>}
                label="Agree terms & conditions"
              ></FormControlLabel>
              <Button color="primary" variant="contained" form="editmodal">
                Submit
              </Button>
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserForm;
