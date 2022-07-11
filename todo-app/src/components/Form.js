import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MainContext } from "../store/MainContext";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

function Form() {
  const [taskName, setTaskName] = useState("");
  const [state, addNewTask] = useContext(MainContext);

  const onAddNewTask = () => {
    addNewTask(taskName);
    setTaskName("");
  };
  return (
    <>
      <TextField
        id="standard-basic"
        variant="standard"
        label="Add todo"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <Button
        variant="text"
        onClick={onAddNewTask}
        style={{ marginTop: "12px" }}
      >
        <AddTaskOutlinedIcon />
      </Button>
    </>
  );
}

export default Form;
