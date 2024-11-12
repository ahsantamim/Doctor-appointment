import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './appointmentsSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
