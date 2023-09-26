import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import data from '../api/data.json';

export type UsersState = {
  entities: User[];
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;
// type DraftUserEdit = Pick<User, keyof User>;

const initialState: UsersState = {
  entities: data.users,
};

const createUser = (draft: DraftUser): User => {
  return { id: nanoid(), tasks: [], ...draft };
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
    // editUser: (state, action: PayloadAction<DraftUserEdit>) => {
    //   const index = state.entities.findIndex;
    // },
  },
});

export const userReducer = usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice;
