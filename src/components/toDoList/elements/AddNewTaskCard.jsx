import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux';

import { addTaskToList } from '../tasksSlice';

const AddNewTaskCard = () => {
  const [newTask, setNewTask] = useState(null);

  const taskInputRef = useRef(null);

  const dispatch = useDispatch();
  
  const handleChange = (val) => {
    setNewTask(val);
  };
  
  const handleSubmit = () => {
    dispatch(addTaskToList(newTask));
  };

  return(
    <div
      style={{

      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={taskInputRef}
          type="text"
          placeholder="Add todo task..."
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewTaskCard;
