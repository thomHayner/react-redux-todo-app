import React from 'react';

import TodoActiveItemsList from './elements/ActiveItemsList';
import TodoCompletedItemList from './elements/CompletedTasksList.jsx';

const ToDoList = () => {
  return(
    <div
      style={{
        width: "80%",
      }}
    >
      <TodoActiveItemsList />
      <br />
      <TodoCompletedItemList />
    </div>
  )
};

export default ToDoList;
