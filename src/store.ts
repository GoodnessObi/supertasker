import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './features/tasks-slice';
import { userReducer } from './features/users-slice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: userReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type ApplicationDispatch = typeof store.dispatch;

export default store;
