import React from "react";
import { useSelector } from 'react-redux';
import { selectTodoList } from "../tasksSlice";

import TaskCard from "./TaskCard";

const CompletedItemsList = () => {
  const tasks = useSelector(selectTodoList);

  return(
    <div>
      {tasks.todoList.map((n,i) => n.completed === true ? 
        <TaskCard
          key={((i+1)**(i+1))/3}
          data={n}
          indexToDelete={i}
        />
      :
        <div key={((i+1)**(i+1))/3} />
      )}
    </div>
   )
};

export default CompletedItemsList;
