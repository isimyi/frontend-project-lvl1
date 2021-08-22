import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (startElement, length, step) => {
  const progression = [];

  for (let i = 0; i < length - 1; i += 1) {
    if (progression.length === 0) {
      progression.push(startElement);
    }

    const newElement = progression[i] + step;
    progression.push(newElement);
  }

  return progression;
};

const hideProgressionElement = (progression, index) => {
  const placeholder = '..';
  const resultArray = progression;

  resultArray[index] = placeholder;

  return resultArray;
};

const setGameProgressionData = () => {
  const firstMember = generateRandomNumber(1, 10);
  const progressionLength = generateRandomNumber(5, 10);
  const commonDifference = generateRandomNumber(2, 30);
  const hiddenElementIndex = generateRandomNumber(0, progressionLength - 1);

  const progression = generateProgression(firstMember, progressionLength, commonDifference);
  const hiddenElement = progression[hiddenElementIndex].toString();
  const hiddenItemProgression = hideProgressionElement(progression, hiddenElementIndex);
  const question = `Question: ${hiddenItemProgression.join(' ')}`;

  return [question, hiddenElement];
};

const playGameProgression = () => {
  playGame(gameRules, setGameProgressionData);
};

export default playGameProgression;
