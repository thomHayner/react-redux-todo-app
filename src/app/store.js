import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/toDoList/tasksSlice';

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
});
