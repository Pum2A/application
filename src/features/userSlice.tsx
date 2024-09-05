import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/User';
import { fetchUsers } from '../services/userService';

interface UserState {
  users: User[];
  filteredUsers: User[];
  filter: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filter: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const users = await fetchUsers();
  return users;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filteredUsers = state.users.filter(user =>
        Object.keys(state.filter).every(key => {
          const userValue = user[key as keyof User];
          const filterValue = state.filter[key as keyof typeof state.filter];

          if (typeof userValue === 'string' && typeof filterValue === 'string') {
            return userValue.toLowerCase().includes(filterValue.toLowerCase());
          }

          return userValue === filterValue;
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    });
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
