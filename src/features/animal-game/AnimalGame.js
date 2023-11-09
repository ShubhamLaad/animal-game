import './AnimalGame.css';
import { setSelectedAnimal } from './animalGameSlice';
import { useDispatch, useSelector } from 'react-redux';

const [FULL, PARTIAL, NONE] = ['FULL', 'PARTIAL', 'NONE'];
const ANIMALS = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
const GUESSE_STEPS = [[FULL, PARTIAL, NONE]];

const getCircleClass = (guess) => {
  switch (guess) {
    case FULL:
      return 'redCircle';
    case PARTIAL:
      return 'whiteCircle';
    default:
      return '';
  }
};

export function AnimalGame() {
  const dispatch = useDispatch();
  const selectedAnimals = useSelector((state) => state.animal.selectedAnimals);

  const handleAnimal = ({ target: { name, value } }) => {
    dispatch(setSelectedAnimal({ name: parseInt(name), value }));
  };

  return (
    <main>
      <h1>Animal Game</h1>
      <ol className="iconList">
        <li>
          {selectedAnimals.map((select, index) => (
            <div key={index}>
              <select name={index} onChange={handleAnimal} value={select}>
                <option value="">Select</option>
                {ANIMALS.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </li>
        {GUESSE_STEPS.map((guesses, index) => (
          <li key={index}>
            {guesses.map((guess) => (
              <div key={guess}>
                <i className={getCircleClass(guess)}></i>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </main>
  );
}
