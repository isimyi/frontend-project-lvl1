import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const commonDifference = generateRandomNumber(2, 30);
  const firstElement = generateRandomNumber(1, 10);
  const progression = [firstElement];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    const newElement = progression[i] + commonDifference;
    progression.push(newElement);
  }

  return progression;
};

const hideProgressionElement = (setProgression) => {
  const placeholder = '..';
  const resultArr = setProgression();
  const resultArrLength = resultArr.length;
  const hiddenElementPosition = generateRandomNumber(0, resultArrLength - 1);
  const hiddenElement = resultArr[hiddenElementPosition].toString();

  resultArr[hiddenElementPosition] = placeholder;

  return [resultArr, hiddenElement];
};

const setGameProgressionData = () => {
  const [progression, correctAnswer] = hideProgressionElement(generateProgression);
  const question = `Question: ${progression.join(' ')}`;

  return [question, correctAnswer];
};

const playGameProgression = () => {
  playGame(gameRules, setGameProgressionData);
};

export default playGameProgression;
