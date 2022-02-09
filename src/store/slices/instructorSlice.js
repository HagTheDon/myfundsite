import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    activeTab: "step1-create-course",
    material: [],
    materialIndex: null, //index for material to add a slide to
  },
  reducers: {
    setMaterialIndex: (state, action) => {
      state.materialIndex = action.payload;
      console.log("current material index", state.materialIndex);
    },

    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    addMaterial: (state, action) => {
      action.payload.content_id =
        state.material.length > 0
          ? (state.material.length + 1).toString()
          : "1";
      state.material.push(action.payload);
    },
    removeMaterial: (state, action) => {
      state.material.splice(parseInt(action.payload), 1);
    },
    reArrangeMaterial: (state, action) => {
      const [reorderedItem] = state.material.splice(
        action.payload.source.index,
        1
      );
      state.material.splice(action.payload.destination.index, 0, reorderedItem);
    },
    addSlide: (state, action) => {
      //push content material
      //topicIndex is where to insert it
      action.payload.id =
        state.material[state.materialIndex].slides.length > 0
          ? (state.material[state.materialIndex].slides.length + 1).toString()
          : "1";
      console.log("slide ID", action.payload.id);

      state.material[state.materialIndex].slides.push(action.payload);
      console.log("added slide", state.material);
    },

    removeSlide: (state, action) => {
      state.material[state.materialIndex].slides.splice(
        parseInt(action.payload),
        1
      );
    },
    reArrangeSlides: (state, action) => {
      const [reorderedItem] = state.material[state.materialIndex].slides.splice(
        action.payload.source.index,
        1
      );
      state.material[state.materialIndex].slides.splice(
        action.payload.destination.index,
        0,
        reorderedItem
      );
    },
    addQuestion: (state, action) => {
      //push content material
      //topicIndex is where to insert it
      action.payload.id =
        state.material[state.materialIndex].questions.length > 0
          ? (
              state.material[state.materialIndex].questions.length + 1
            ).toString()
          : "1";
      console.log("question ID", action.payload.id);

      state.material[state.materialIndex].questions.push(action.payload);
      console.log("added slide", state.material);
    },

    removeQuestion: (state, action) => {
      state.material[state.materialIndex].questions.splice(
        parseInt(action.payload),
        1
      );
    },
    reArrangeQuestions: (state, action) => {
      const [reorderedItem] = state.material[
        state.materialIndex
      ].questions.splice(action.payload.source.index, 1);
      state.material[state.materialIndex].questions.splice(
        action.payload.destination.index,
        0,
        reorderedItem
      );
    },
  },
});

export const {
  setActiveTab,
  setMaterialIndex,
  addMaterial,
  removeMaterial,
  reArrangeMaterial,
  addSlide,
  removeSlide,
  reArrangeSlides,
  addQuestion,
  removeQuestion,
  reArrangeQuestions,
} = instructorSlice.actions;

export default instructorSlice.reducer;
