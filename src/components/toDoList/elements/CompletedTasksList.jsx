import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../tasksSlice";

import TaskCard from "./TaskCard";

const CompletedItemsList = () => {
  const tasks = useSelector(selectTodoList);

  return(
    <div>
      <h5
        style={{
          display: "flex",
          color: "white",
          margin: "0px",
          padding: "0px",
        }}
      >
          Completed: (<span>{tasks.todoList.filter((n) => n.completed === true).length}</span>)
      </h5>
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
