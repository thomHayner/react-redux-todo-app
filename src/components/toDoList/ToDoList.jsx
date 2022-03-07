import React from "react";
import styled from "styled-components";

import TodoActiveItemsList from "./elements/ActiveItemsList";
import TodoCompletedItemList from "./elements/CompletedTasksList.jsx";

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: -20px;
  padding: 0px;
  row-gap: 20px;
`;

const DashedAreaDivider = styled.div`
  width: 100%;
  border-bottom: 2px dashed lightgrey;
  margin-left: 10px;
`;

const ToDoList = () => {
  return(
    <ComponentWrapper>
      <TodoActiveItemsList />
      <DashedAreaDivider />
      <TodoCompletedItemList />
    </ComponentWrapper>
  )
};

export default ToDoList;
