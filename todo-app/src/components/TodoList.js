import React, { useContext, useState } from "react";
import { MainContext } from "../store/MainContext";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import Button from "@mui/material/Button";
import ModalEditTask from "./ModalEditTask";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Tooltip from "@mui/material/Tooltip";

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
                <Tooltip title="Mark as done" placement="top-end">
                  <DoneAllOutlinedIcon
                    onClick={() => markTaskAsDone(task.id)}
                  />
                </Tooltip>
              </Button>
            )}
            <Button onClick={() => deleteTask(task.id)}>
              <Tooltip title="Delete todo" placement="top-end">
                <DeleteOutlinedIcon />
              </Tooltip>
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
              <Tooltip title="Edit todo" placement="top-end">
                <EditOutlinedIcon />
              </Tooltip>
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
