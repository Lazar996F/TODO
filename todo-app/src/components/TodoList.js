import React, { useContext, useState } from "react";
import { MainContext } from "../store/MainContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import Button from "@mui/material/Button";
import ModalEditTask from "./ModalEditTask";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function TodoList() {
  const [state, _, markTaskAsDone, deleteTask] = useContext(MainContext);
  const [openEditModal, setOpenModal] = useState(false);
  const { todos } = state;

  return (
    <ul>
      {todos.map((task) => (
        <li key={task.id}>
          {task.name} {task.isDone && <span>Done</span>}
          <Button>
            <DoneAllOutlinedIcon onClick={() => markTaskAsDone(task.id)} />
          </Button>
          <Button onClick={() => deleteTask(task.id)}>
            <DeleteOutlinedIcon />
          </Button>
          <Button onClick={() => setOpenModal(true)}>
            <EditOutlinedIcon />
          </Button>
          <ModalEditTask
            open={openEditModal}
            onClose={() => setOpenModal(false)}
            selectedTask={{
              name: task.name,
              id: task.id,
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
