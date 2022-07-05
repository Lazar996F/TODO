import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MainContext } from "../store/MainContext";

function Form() {
  const [taskName, setTaskName] = useState("");
  const [state, addNewTask] = useContext(MainContext);

  return (
    <>
      <TextField
        id="standard-basic"
        variant="standard"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button variant="text" onClick={() => addNewTask(taskName)}>
        Add
      </Button>
    </>
  );
}

export default Form;
