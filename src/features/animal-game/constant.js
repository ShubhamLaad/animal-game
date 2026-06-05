export const [FULL, PARTIAL, NONE] = ['FULL', 'PARTIAL', 'NONE'];

export const ANIMAL_COLORS = {
  RED: '#ff6b6b', // Coral Red
  GREEN: '#51cf66', // Soft Green
  BLUE: '#339af0', // Bright Blue
};

export const ANIMALS = [
  { animalType: 'Cat', animalColor: 'RED' },
  { animalType: 'Cat', animalColor: 'GREEN' },
  { animalType: 'Cat', animalColor: 'BLUE' },
  { animalType: 'Bird', animalColor: 'RED' },
  { animalType: 'Bird', animalColor: 'GREEN' },
  { animalType: 'Bird', animalColor: 'BLUE' },
  { animalType: 'Fish', animalColor: 'RED' },
  { animalType: 'Fish', animalColor: 'GREEN' },
  { animalType: 'Fish', animalColor: 'BLUE' },
];

const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const winningAnimals = shuffle([...ANIMALS]).slice(0, 3);
