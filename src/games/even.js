import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const minNumber = 0;
const maxNumber = 1000;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const setGameEvenData = () => {
  const generatedNumber = generateRandomNumber(minNumber, maxNumber);
  const correctAnswer = getCorrectAnswer(generatedNumber);

  return [generatedNumber, correctAnswer];
};

const playGameEven = () => {
  playGame(gameRules, setGameEvenData);
};

export default playGameEven;
