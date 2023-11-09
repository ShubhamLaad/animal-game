export const [FULL, PARTIAL, NONE] = ['FULL', 'PARTIAL', 'NONE'];

export const ANIMAL_OBJ = {
  A1: { label: 'A1', animalType: 'A', animalColor: '1' },
  A2: { label: 'A2', animalType: 'A', animalColor: '2' },
  B1: { label: 'B1', animalType: 'B', animalColor: '1' },
  B2: { label: 'B2', animalType: 'B', animalColor: '2' },
  C1: { label: 'C1', animalType: 'C', animalColor: '1' },
  C2: { label: 'C2', animalType: 'C', animalColor: '2' },
};

export const ANIMALS = Object.values(ANIMAL_OBJ).map(({ label }) => label);

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const winningAnimals = shuffle(ANIMALS).slice(0, 3);
