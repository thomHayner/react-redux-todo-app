import React from "react";
import styled from "styled-components";
import AddNewTaskCard from "./components/toDoList/AddNewTaskCard";
import ToDoList from "./components/toDoList/ToDoList";

const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #0A104F;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  max-width: 33vw;
  background-color: #653BCD;
  margin: 10px;
  padding: 20px;
  row-gap: 20px;
`;

const AppTitle = styled.h3`
  color: lightgrey;
  text-decoration: underline;
  margin: 0px;
  padding: 0px;
`;

function App() {

  return (
    <AppMain>
      <ContentWrapper>
        <AppTitle>
          Todo App
        </AppTitle>
        <AddNewTaskCard />
        <ToDoList />
      </ContentWrapper>
    </AppMain>
  );
}

export default App;
