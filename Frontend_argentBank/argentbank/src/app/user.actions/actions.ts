// auth.actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  'user/logIn',
  async ({ email, password, rememberMe }: { email: string, password: string, rememberMe: boolean }, { rejectWithValue }) => {
    try {

      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      localStorage.setItem('token', token);

      if (rememberMe) {
        sessionStorage.setItem('token', token);
      }

      return data;

    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token'); 
      sessionStorage.removeItem('token');

      return null;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'user/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const editUsername = createAsyncThunk(
  'user/updateUserName',
  async (newUserName: string, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      const data = await response.json();
      console.log("Les data sont", data.body.userName)
      return data.body.userName;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);