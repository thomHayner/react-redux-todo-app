import React from 'react';

import TodoActiveItemsList from './elements/ActiveItemsList';
import TodoCompletedItemList from './elements/CompletedTasksList.jsx';

const ToDoList = () => {
  return(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginLeft: "-20px",
        padding: "0px",
        rowGap: "20px",
      }}
    >
      <TodoActiveItemsList />
      <div
        style={{
          width: "100%",
          borderBottom: "2px dashed lightgrey",
          marginLeft: "10px",
        }}
      />
      <TodoCompletedItemList />
    </div>
  )
};

export default ToDoList;
