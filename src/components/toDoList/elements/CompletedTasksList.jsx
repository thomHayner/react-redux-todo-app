import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../tasksSlice";
import styled from "styled-components";

import TaskCard from "./TaskCard";

const SubTitle = styled.h4`
  display: flex;
  color: white;
  margin: 0px;
  padding: 0px;
`;

const CompletedItemsList = () => {
  const tasks = useSelector(selectTodoList);

  return(
    <div>
      <SubTitle>
          Completed: (<span>{tasks.todoList.filter((n) => n.completed === true).length}</span>)
      </SubTitle>
      {tasks.todoList.map((n,i) => n.completed === true ? 
        <TaskCard
          key={((i+1)**(i+1))/3}
          data={n}
          indexToAlter={i}
        />
      :
        <div key={((i+1)**(i+1))/3} />
      )}
    </div>
   )
};

export default CompletedItemsList;
