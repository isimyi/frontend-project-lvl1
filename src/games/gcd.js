import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const minNumber = 0;
const maxNumber = 100;
const gameInstruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGcd(num2, (num1 % num2));
};

const generateGameGcdData = () => {
  const generatedNumber1 = generateRandomNumber(minNumber, maxNumber);
  const generatedNumber2 = generateRandomNumber(minNumber, maxNumber);
  const question = `${generatedNumber1} ${generatedNumber2}`;
  const correctAnswer = findGcd(generatedNumber1, generatedNumber2).toString();

  return [question, correctAnswer];
};

const playGameGcd = () => {
  playGame(gameInstruction, generateGameGcdData);
};

export default playGameGcd;
