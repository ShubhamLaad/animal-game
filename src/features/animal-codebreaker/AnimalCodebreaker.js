import './AnimalCodebreaker.css';
import { setSelectedAnimal, setGuessSteps, resetGame } from './animalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ANIMALS, ANIMAL_COLORS, FULL } from '../constant';
import Select from 'react-select';
import AnimalCodebreakerRules from '../rules/AnimalCodebreakerRules';

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
    minWidth: '120px', // Increased for better readability
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
    zIndex: 9999, // Ensure the dropdown appears on top
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999, // Ensure the portal itself has a high z-index
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#64748b',
  }),
};

export function AnimalCodebreaker() {
  const dispatch = useDispatch();
  const selectedAnimals = useSelector((state) => state.animal.selectedAnimals);
  const guessSteps = useSelector((state) => state.animal.guessSteps);

  const handleAnimal = (index, value) => {
    dispatch(setSelectedAnimal({ selectBoxIndex: index, value }));
  };

  const disabledSelectFullGuess = (index) =>
    guessSteps[guessSteps.length - 1] &&
    guessSteps[guessSteps.length - 1][index] === FULL;

  const isAllGuessed =
    guessSteps.length !== 0 &&
    guessSteps[guessSteps.length - 1].every((guess) => guess === FULL);

  const handleOk = () => {
    if (isAllGuessed) {
      dispatch(resetGame());
    } else {
      dispatch(setGuessSteps());
    }
  };

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
                menuPortalTarget={document.body} // Render dropdown outside of parent elements
                menuPlacement="auto" // Automatically place menu above or below
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
      >
        {isAllGuessed
          ? `YOU WON IN ${guessSteps.length} STEPS🏆! PLAY NEW GAME`
          : 'OK'}
      </button>

      <AnimalCodebreakerRules />
    </main>
  );
}
