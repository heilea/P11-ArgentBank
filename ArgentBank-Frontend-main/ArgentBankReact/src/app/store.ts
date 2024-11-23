import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../app/feature/authSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

/*Voir l'etat du store dans la console*/
if(process.env.NODE_ENV !== 'production'){
    (window as any).store = store;
}
//Exportation du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;