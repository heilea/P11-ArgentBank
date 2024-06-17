import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfile, editUsername } from '../user.actions/actions';

export type UserState = {
  firstName: string,
  lastName:string,
  username:string
}

export type AuthState = {
  isAuthenticated:boolean,
  user: UserState,
  token: null | string,
  error: null | string
}
export const initialState = {
  isAuthenticated: false,
  user: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  token: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action:any) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.user.userName = action.payload;
        state.error = null;
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});



