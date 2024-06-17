import { configureStore} from '@reduxjs/toolkit';
import { userSlice } from './user.slices/slice';


export const store = configureStore({
    reducer: {
      auth: userSlice.reducer,
    }
  })