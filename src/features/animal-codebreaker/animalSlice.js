import { createSlice } from '@reduxjs/toolkit';
import { FULL, NONE, PARTIAL, winningAnimals } from '../constant';

const initialState = {
  selectedAnimals: ['', '', ''],
  guessSteps: [],
};

const getAnimalValue = (selectedAnimal) => {
  const [animalType, animalColor] = selectedAnimal.split('-');
  return {
    animalType,
    animalColor,
  };
};

const getAnimalGuess = (selectedAnimal, index) => {
  const selected = getAnimalValue(selectedAnimal);
  const winning = winningAnimals[index];

  if (
    selected.animalType === winning.animalType &&
    selected.animalColor === winning.animalColor
  ) {
    return FULL;
  }

  if (
    selected.animalType === winning.animalType ||
    selected.animalColor === winning.animalColor
  ) {
    return PARTIAL;
  }

  return NONE;
};

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setSelectedAnimal: (state, action) => {
      state.selectedAnimals[action.payload.selectBoxIndex] =
        action.payload.value;
    },
    setGuessSteps: (state, action) => {
      // check all value selected
      const allSelected = state.selectedAnimals.every(
        (animal) => animal !== '',
      );
      if (allSelected) {
        state.guessSteps.push(
          state.selectedAnimals.map((selectedAnimal, index) =>
            getAnimalGuess(selectedAnimal, index),
          ),
        );
      }
    },
  },
});

export const { setSelectedAnimal, setGuessSteps } = animalSlice.actions;

export default animalSlice.reducer;
