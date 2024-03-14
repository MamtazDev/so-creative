import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectId: undefined,
  step: 0,
  activeBrif: undefined,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectId: (state, action) => {
      state.projectId = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setActiveBrif: (state, action) => {
      state.activeBrif = action.payload;
    },
  },
});

export const { setProjectId, setStep, setActiveBrif } = projectSlice.actions;
export default projectSlice.reducer;
