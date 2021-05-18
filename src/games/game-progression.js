import generateRandomNumber from '../utils.js';

const generateProgression = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const commonDifference = generateRandomNumber(2, 30);
  const firstElement = generateRandomNumber(1, 10);
  const hiddenElementPosition = generateRandomNumber(0, progressionLength - 1);
  const placeholder = '..';
  const progression = [firstElement];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    const newElement = progression[i] + commonDifference;
    progression.push(newElement);
  }

  const hiddenElement = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = placeholder;

  return [progression, hiddenElement];
};

const setGameProgressionData = () => {
  const gameRules = 'What number is missing in the progression?';
  const [progression, correctAnswer] = generateProgression();
  const question = `Question: ${progression.join(' ')}`;

  return [gameRules, question, correctAnswer];
};

export default setGameProgressionData;
