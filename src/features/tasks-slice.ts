import { createSlice } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state) => state,
    removeTask: (state) => state,
  },
});
