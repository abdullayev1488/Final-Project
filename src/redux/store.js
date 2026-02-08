import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
