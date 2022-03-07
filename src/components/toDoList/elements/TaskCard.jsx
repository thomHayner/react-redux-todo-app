import React from "react";
import {  useDispatch } from "react-redux";
import { deleteTaskFromList, updateTodoCheckbox } from "../tasksSlice";

const TaskCard = ({ data, indexToAlter }) => {
  const dispatch = useDispatch();

  const handleChange = (i) => {
    dispatch(updateTodoCheckbox(i))
  };

  const handleDelete = (i) => {
    dispatch(deleteTaskFromList(i));
  };

  return(
    <div style={{ 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        border: "1px solid lightgrey",
        padding: "10px",
    }}>
      <label
        style={{
          color: data.completed ? "lightgrey" : "white",
          textDecoration: data.completed ? "line-through" : "none",
        }}
      >
        <input 
          type="checkbox"
          checked={data.completed}
          onChange={() => handleChange(indexToAlter)}
        />
        {data.todo}
      </label>
      <input 
        type="button"
        id="delete"
        value="Delete"
        onClick={() => handleDelete(indexToAlter)}
        style={{
          width: "20%",
        minWidth: "68px",
        backgroundColor: "#ED722D",
        color: "white",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "5px",
        }}
      />
    </div>
  );
};

export default TaskCard;
