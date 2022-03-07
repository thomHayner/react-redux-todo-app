import React from 'react';

import TodoActiveItemsList from './elements/ActiveItemsList';
import TodoCompletedItemList from './elements/CompletedTasksList.jsx';

const ToDoList = () => {
  return(
    <div
      style={{
        width: "80%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <TodoActiveItemsList />
      <div
        style={{
          width: "100%",
          margin: "10px",
          borderBottom: "5px dashed lightgrey",
        }}
      />
      <TodoCompletedItemList />
    </div>
  )
};

export default ToDoList;
