import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';
import instructorReducer from './slices/instructorSlice';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { myfundsiteAPI } from './services/myfundsiteAPI';

export default configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    instructor: instructorReducer,
    // Add the generated reducer as a specific top-level slice
    [myfundsiteAPI.reducerPath]: myfundsiteAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myfundsiteAPI.middleware),
});
