import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState, User } from '../../pages/type';

export const user = createAsyncThunk<
  { body: User }, // Return type of the thunk
  string, // Argument type (token)
  { rejectValue: string } // Reject value type
>(
  'user',
  async (token, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({})
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const initialState: ProfileState = {
  userData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(user.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(user.fulfilled, (state, action: PayloadAction<{ body: User }>) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(user.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;