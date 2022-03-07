import React from 'react';
import AddNewTaskCard from './components/toDoList/AddNewTaskCard';
import ToDoList from './components/toDoList/ToDoList';
import './App.css';

function App() {
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A104F",
      }}
    >
      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "350px",
          maxWidth: "33vw",
          backgroundColor: "#653BCD",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h4>Todo App</h4>
        <AddNewTaskCard />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
