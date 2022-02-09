import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload
    },
    setToken: (state,action) => {
      state.token = action.payload
    }
  },
});

export const { setCredentials, setToken} = authSlice.actions;

export default authSlice.reducer;