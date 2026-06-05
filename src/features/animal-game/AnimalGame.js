import './AnimalGame.css';
import { setSelectedAnimal, setGuessSteps } from './animalGameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ANIMALS, ANIMAL_COLORS, FULL, PARTIAL } from './constant';
import Select from 'react-select';

const selectOptions = ANIMALS.map((animal) => ({
  value: `${animal.animalType}-${animal.animalColor}`,
  label: animal.animalType,
  color: ANIMAL_COLORS[animal.animalColor],
}));

const customStyles = {
  option: (styles, { data, isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? '#334155' : '#1e293b',
    color: data.color,
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '10px',
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
    fontWeight: 'bold',
  }),
  control: (styles) => ({
    ...styles,
    minWidth: '100px',
    backgroundColor: '#0f172a',
    borderColor: '#334155',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#38bdf8',
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#64748b',
  }),
};

export function AnimalGame() {
  const dispatch = useDispatch();
  const selectedAnimals = useSelector((state) => state.animal.selectedAnimals);
  const guessSteps = useSelector((state) => state.animal.guessSteps);

  const handleAnimal = (index, value) => {
    dispatch(setSelectedAnimal({ selectBoxIndex: index, value }));
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
      <h1>Animal Codebreaker</h1>
      <ol className="iconList">
        <li>
          {selectedAnimals.map((animal, selectBoxIndex) => (
            <div key={selectBoxIndex}>
              <Select
                isDisabled={disabledSelectFullGuess(selectBoxIndex)}
                onChange={(opt) =>
                  handleAnimal(selectBoxIndex, opt?.value || '')
                }
                options={selectOptions}
                styles={customStyles}
                value={
                  selectOptions.find((opt) => opt.value === animal) || null
                }
                placeholder="Select"
                isSearchable={false}
              />
            </div>
          ))}
        </li>
        {guessSteps.map((guessStep, index) => (
          <li key={index}>
            {guessStep.map((guess, guessIndex) => (
              <div key={guessIndex}>
                <i className={guess}></i>
              </div>
            ))}
          </li>
        ))}
      </ol>
      <button
        onClick={handleOk}
        className={`okBtn ${isAllGuessed ? 'won-btn' : ''}`}
        disabled={isAllGuessed}
      >
        {isAllGuessed ? `U WON IN ${guessSteps.length} STEPS!` : 'OK'}
      </button>
    </main>
  );
}
