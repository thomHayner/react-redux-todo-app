import React from "react";
import {  useDispatch } from 'react-redux';
import { deleteTaskFromList, updateTodoCheckbox } from "../tasksSlice";

const TaskCard = ({ data, indexToDelete}) => {
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
      <label>
        <input type="checkbox" checked={data.completed} onChange={() => handleChange(indexToDelete)} />
        {data.todo}
      </label>
      <input type="button" id="delete" value="Delete" onClick={() => handleDelete(indexToDelete)} />
    </div>
  );
};

export default TaskCard;
