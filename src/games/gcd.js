import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;
const gameRules = 'Find the greatest common divisor of given numbers.';

const generateQuestion = (num1, num2) => `Question: ${num1} ${num2}`;

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGcd(num2, (num1 % num2));
};

const setGameGcdData = () => {
  const generatedNum1 = generateRandomNumber(minNumber, maxNumber);
  const generatedNum2 = generateRandomNumber(minNumber, maxNumber);
  const question = generateQuestion(generatedNum1, generatedNum2);
  const correctAnswer = findGcd(generatedNum1, generatedNum2).toString();

  return [question, correctAnswer];
};

const playGameGcd = () => {
  playGame(gameRules, setGameGcdData);
};

export default playGameGcd;
