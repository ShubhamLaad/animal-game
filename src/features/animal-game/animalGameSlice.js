import { createSlice } from '@reduxjs/toolkit';
import { ANIMAL_OBJ, FULL, NONE, PARTIAL } from './constant';
const winningAnimals = ['A1', 'A1', 'B1'];

const initialState = {
  selectedAnimals: ['', '', ''],
  guessSteps: [],
};

const getAnimalGuess = (selectedAnimal, index) => {
  if (selectedAnimal === winningAnimals[index]) return FULL;
  const selectedAnimalType = ANIMAL_OBJ[selectedAnimal].animalType;
  const winningAnimalType = ANIMAL_OBJ[winningAnimals[index]].animalType;
  if (selectedAnimalType === winningAnimalType) return PARTIAL;
  return NONE;
};

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setSelectedAnimal: (state, action) => {
      state.selectedAnimals[action.payload.name] = action.payload.value;

      // check all value selected
      const allSelected = state.selectedAnimals.every(
        (animal) => Boolean(animal) === true
      );
      if (allSelected) {
        state.guessSteps.push(
          state.selectedAnimals.map((selectedAnimal, index) =>
            getAnimalGuess(selectedAnimal, index)
          )
        );
      }
    },
  },
});

export const { setSelectedAnimal } = animalSlice.actions;

export default animalSlice.reducer;
