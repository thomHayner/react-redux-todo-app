import React from "react";
import {  useDispatch } from "react-redux";
import { deleteTaskFromList, updateTodoCheckbox } from "../tasksSlice";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid lightgrey;
  padding: 10px;
`;

const TodoCheckboxLabel = styled.label`
  color: data.completed ? lightgrey : white;
  text-decoration: data.completed ? line-through : none;
`;

const DeleteButton = styled.input`
  width: 20%;
  min-width: 68px;
  background-color: #ED722D;
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
`;

const TaskCard = ({ data, indexToAlter }) => {
  const dispatch = useDispatch();

  const handleChange = (i) => {
    dispatch(updateTodoCheckbox(i))
  };

  const handleDelete = (i) => {
    dispatch(deleteTaskFromList(i));
  };

  return(
    <CardWrapper>
      <TodoCheckboxLabel>
        <input 
          type="checkbox"
          checked={data.completed}
          onChange={() => handleChange(indexToAlter)}
        />
        {data.todo}
      </TodoCheckboxLabel>
      <DeleteButton 
        type="button"
        id="delete"
        value="Delete"
        onClick={() => handleDelete(indexToAlter)}
      />
    </CardWrapper>
  );
};

export default TaskCard;
