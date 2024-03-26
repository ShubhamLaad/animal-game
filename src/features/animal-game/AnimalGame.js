import './AnimalGame.css';
import { setSelectedAnimal, setGuessSteps } from './animalGameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ANIMALS, FULL, PARTIAL } from './constant';

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
  const guessSteps = useSelector((state) => state.animal.guessSteps);

  const handleAnimal = ({ target: { name, value } }) => {
    dispatch(setSelectedAnimal({ name: parseInt(name), value }));
  };

  const disabledSelectFullGuess = (index) =>
    guessSteps[guessSteps.length - 1] &&
    guessSteps[guessSteps.length - 1][index] === FULL;

  const handleOk = () => {
    dispatch(setGuessSteps());
  };

  const isAllGuessed =
    guessSteps.length !== 0 &&
    guessSteps[guessSteps.length - 1].every((guess) => guess === FULL);

  return (
    <main>
      <h1>Guess The Animals</h1>
      <ol className="iconList">
        <li>
          {selectedAnimals.map((animal, index) => (
            <div key={index}>
              <select
                disabled={disabledSelectFullGuess(index)}
                name={index}
                onChange={handleAnimal}
                value={animal}
              >
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
        {guessSteps.map((guesses, index) => (
          <li key={index}>
            {guesses.map((guess, index) => (
              <div key={index}>
                <i className={getCircleClass(guess)}></i>
              </div>
            ))}
          </li>
        ))}
      </ol>
      <button onClick={handleOk} className="okBtn" disabled={isAllGuessed}>
        {isAllGuessed ? `U WON IN ${guessSteps.length} STEPS!` : 'OK'}
      </button>
    </main>
  );
}
