import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import animalReducer from '../features/animal-game/animalGameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    animal: animalReducer,
  },
});
