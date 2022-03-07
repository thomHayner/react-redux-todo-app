import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      todo: "Todo 1",
      completed: true
    },{
      todo: "Todo 2",
      completed: false
    },{
      todo: "Todo 3",
      completed: false
    },{
      todo: "Todo 4",
      completed: false
    }
  ]
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      state.todoList.push({
        todo: action.payload,
        completed: false,
      })
    },
    deleteTaskFromList: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    updateTodoCheckbox: (state, action) => {
      state.todoList[action.payload].completed = !state.todoList[action.payload].completed
    },
  },
});

export const { addTaskToList, deleteTaskFromList, updateTodoCheckbox } = todoSlice.actions;

export const selectTodoList = (state) => state.todoList;

export default todoSlice.reducer;
