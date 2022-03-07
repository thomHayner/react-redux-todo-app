import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';

import { addTaskToList } from '../tasksSlice';

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
          margin: "10px",
          padding: "10px",
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
        <button
          style={{
            width: "56px",
          }}
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </form>
  );
};

export default AddNewTaskCard;
