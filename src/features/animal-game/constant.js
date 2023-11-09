export const [FULL, PARTIAL, NONE] = ['FULL', 'PARTIAL', 'NONE'];

export const ANIMAL_OBJ = {
  A1: { label: 'A1', animalType: 'A', animalColor: '1' },
  A2: { label: 'A2', animalType: 'A', animalColor: '2' },
  A3: { label: 'A3', animalType: 'A', animalColor: '3' },
  B1: { label: 'B1', animalType: 'B', animalColor: '1' },
  B2: { label: 'B2', animalType: 'B', animalColor: '2' },
  B3: { label: 'B3', animalType: 'B', animalColor: '3' },
  C1: { label: 'C1', animalType: 'C', animalColor: '1' },
  C2: { label: 'C2', animalType: 'C', animalColor: '2' },
  C3: { label: 'C3', animalType: 'C', animalColor: '3' },
};

export const ANIMALS = Object.values(ANIMAL_OBJ).map(({ label }) => label);

const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const winningAnimals = shuffle(ANIMALS).slice(0, 3);
