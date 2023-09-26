import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from '../api/data.json';

export type TasksState = {
  entities: Task[];
};

type DraftTask = RequireOnly<Task, 'title'>;

const initialState: TasksState = {
  entities: data.tasks,
};

const createTask = (draft: DraftTask): Task => {
  return { ...draft, id: nanoid() };
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export const taskReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
