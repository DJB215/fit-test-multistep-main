import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
// import { EventFormData } from "./EventCalendar";

const AddEventModal = ({ open, handleClose, onAddEvent, eventDetails }) => {
  const onClose = () => handleClose();

  const startDate = eventDetails?.start.toLocaleDateString();
  const startTime = eventDetails?.start.toLocaleTimeString();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          fontFamily: "museo-sans",
          color: "#152456",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Confirm Selection
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontFamily: "museo-sans",
            color: "#152456",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Location: <br />
          Date: {startDate} <br />
          Time: {startTime}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          onClick={onClose}
          sx={{
            color: "#152456",
            background: "white",
            width: "100px",
            border: "1px solid #152456",
            ":hover": "#152456",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onAddEvent}
          sx={{
            color: "white",
            background: "#152456",
            width: "100px",
            ":hover": "#152456",
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventModal;
