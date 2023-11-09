export const [FULL, PARTIAL, NONE] = ['FULL', 'PARTIAL', 'NONE'];

export const ANIMAL_OBJ = {
  A1: { label: 'A1', animalType: 'A', animalColor: '1' },
  A2: { label: 'A2', animalType: 'A', animalColor: '2' },
  B1: { label: 'B1', animalType: 'B', animalColor: '1' },
  B2: { label: 'B2', animalType: 'B', animalColor: '2' },
};

export const ANIMALS = Object.values(ANIMAL_OBJ).map(({ label }) => label);
