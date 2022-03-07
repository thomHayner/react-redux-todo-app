import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../tasksSlice";

import TaskCard from "./TaskCard";

const ActiveItemsList = () => {
  const tasks = useSelector(selectTodoList);

  return(
    <div>
      {tasks.todoList.map((n,i) => n.completed === false ? 
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

export default ActiveItemsList;
