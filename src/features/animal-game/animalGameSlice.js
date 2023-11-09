import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAnimals: ['', '', ''],
};

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setSelectedAnimal: (state, action) => {
      state.selectedAnimals[action.payload.name] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedAnimal } = animalSlice.actions;

export default animalSlice.reducer;
