import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const courseSlice = createSlice({
  name: 'course',
  initialState: {
    slides: null,
    questions: null
  },
  reducers: {
    setSlides: (state, action) => {
      state.slides = action.payload;
      state.questions = null;
    },
    setQuestions: (state, action) => {
        state.questions = action.payload;
        state.slides = null;
      },
  },
});

export const { setSlides, setQuestions } = courseSlice.actions;

export default courseSlice.reducer;