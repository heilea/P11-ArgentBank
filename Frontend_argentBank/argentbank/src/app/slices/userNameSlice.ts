import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ProfileState, User } from '../../pages/type';

export const updateUserName = createAsyncThunk<
{ body: User }, // Return type of the thunk
{ token: string | null, newUserName: string }, // Argument type
{ rejectValue: string } // Reject value type
>(
    'user/updateName',
    async ({token, newUserName}:{token:string | null, newUserName:string}, thunkAPI) => {
        try {
            //console.log(token);
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },

                body: JSON.stringify({ userName: newUserName })
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message);
                throw new Error(errorData.message);
            }

            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log((error as Error).message);
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    });

const initialState:ProfileState = {
    userData: null,
    loading: false,
    error: null,
}

const userNameSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserName.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserName.fulfilled, (state, action:PayloadAction<{body:User}>) => {
                state.loading = false;
                state.userData = action.payload;
            })
            .addCase(updateUserName.rejected, (state, action:PayloadAction<string|undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong'
            });
    },
});

export default userNameSlice.reducer;