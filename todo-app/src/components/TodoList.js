import React, { useContext, useState } from "react";
import { MainContext } from "../store/MainContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import Button from "@mui/material/Button";
import ModalEditTask from "./ModalEditTask";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function TodoList() {
  const [state, _, markTaskAsDone, deleteTask, editTask] =
    useContext(MainContext);
  const [openEditModal, setOpenModal] = useState(false);
  const [selectedTaskForEdit, setSelectedTaskForEdit] = useState({
    name: "",
    id: null,
  });
  const { todos } = state;

  return (
    <>
      <ul className="list">
        {todos.map((task) => (
          <li key={task.id}>
            {task.name}
            {!task.isDone && (
              <Button>
                <DoneAllOutlinedIcon onClick={() => markTaskAsDone(task.id)} />
              </Button>
            )}
            <Button onClick={() => deleteTask(task.id)}>
              <DeleteOutlinedIcon />
            </Button>
            <Button
              onClick={() => {
                setSelectedTaskForEdit({
                  name: task.name,
                  id: task.id,
                });
                setOpenModal(true);
              }}
            >
              <EditOutlinedIcon />
            </Button>
          </li>
        ))}
      </ul>
      <ModalEditTask
        open={openEditModal}
        onClose={() => setOpenModal(false)}
        selectedTask={selectedTaskForEdit}
        onSubmit={editTask}
      />
    </>
  );
}

export default TodoList;
