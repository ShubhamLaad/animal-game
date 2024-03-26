import { createSlice } from '@reduxjs/toolkit';
import { ANIMAL_OBJ, FULL, NONE, PARTIAL, winningAnimals } from './constant';

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
    },
    setGuessSteps: (state, action) => {
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

export const { setSelectedAnimal, setGuessSteps } = animalSlice.actions;

export default animalSlice.reducer;
