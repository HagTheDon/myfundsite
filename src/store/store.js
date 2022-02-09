import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import courseReducer from './slices/courseSlice'
import instructorReducer from './slices/instructorSlice'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { birdflapApi } from './services/birdflapApi'

export default configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    instructor: instructorReducer,
    // Add the generated reducer as a specific top-level slice
    [birdflapApi.reducerPath]: birdflapApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(birdflapApi.middleware),
})
