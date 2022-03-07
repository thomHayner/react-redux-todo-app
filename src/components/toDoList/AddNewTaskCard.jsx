import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addTaskToList } from "./tasksSlice";

const AddTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: -10px;
  padding: 0px;
`;

const TaskInput = styled.input`
  width: 100%;
`;

const SubmitButton = styled.input`
  width: 20%;
  min-width: 68px;
  background-color: #ED722D;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
`;

const AddNewTaskCard = () => {
  const [newTask, setNewTask] = useState("");

  const taskInputRef = useRef(null);

  const dispatch = useDispatch();
  
  const handleChange = (val) => {
    setNewTask(val);
  };
  
  const handleSubmit = () => {
    dispatch(addTaskToList(newTask));
    setNewTask("");
  };

  return(
      <AddTaskForm
        onSubmit={(e) => e.preventDefault()}
      >
        <TaskInput
          ref={taskInputRef}
          type="text"
          placeholder="Add todo task..."
          value={newTask}
          onChange={(e) => handleChange(e.target.value)}
        />
        <SubmitButton
          type="submit"
          value="Submit"
          onClick={() => handleSubmit()}
        />
      </AddTaskForm>
  );
};

export default AddNewTaskCard;
