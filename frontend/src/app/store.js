import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import goalReducer from '../features/goals/GoalSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
