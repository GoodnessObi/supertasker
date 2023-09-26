import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export type TasksState = {
  entities: Task[];
};

type DraftTask = RequireOnly<Task, 'title'>;

const initialState: TasksState = {
  entities: [],
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
    removeTask: (state) => state,
  },
});

export const taskReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;
