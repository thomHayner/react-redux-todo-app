import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../components/toDoList/tasksSlice';

export const store = configureStore({
  reducer: {
    todoList: tasksReducer,
  },
});
