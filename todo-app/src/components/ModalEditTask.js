import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  pt: 2,
  px: 4,
  pb: 3,
};

function ModalEditTask({ open, onClose, selectedTask }) {
  const [taskName, setTaskName] = useState(selectedTask.name);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Change task name</h2>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <Button
          variant="text"
          onClick={() => console.log(">>Save new name", taskName)}
        >
          <SaveOutlinedIcon />
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalEditTask;
