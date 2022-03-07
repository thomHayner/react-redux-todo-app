import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';

import { addTaskToList } from './tasksSlice';

const AddNewTaskCard = () => {
  const [newTask, setNewTask] = useState('');

  const taskInputRef = useRef(null);

  const dispatch = useDispatch();
  
  const handleChange = (val) => {
    setNewTask(val);
  };
  
  const handleSubmit = () => {
    dispatch(addTaskToList(newTask));
    setNewTask('');
  };

  return(
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "-10px",
          padding: "0px",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={taskInputRef}
          style={{
            width: "100%",
          }}
          type="text"
          placeholder="Add todo task..."
          value={newTask}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input
          style={{
            width: "20%",
            minWidth: "68px",
            backgroundColor: "#ED722D",
            color: "white",
            textTransform: "uppercase",
            textAlign: "center",
            padding: "5px",
          }}
          type="submit"
          value="Submit"
          onClick={() => handleSubmit()}
        />
      </form>
  );
};

export default AddNewTaskCard;
