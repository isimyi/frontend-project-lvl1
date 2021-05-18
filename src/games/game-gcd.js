import generateRandomNumber from '../utils.js';

const minNumber = 0;
const maxNumber = 100;

const setQuestion = (num1, num2) => `Question: ${num1} ${num2}`;

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return findGcd(num2, (num1 % num2));
};

const setGameGcdData = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const generatedNum1 = generateRandomNumber(minNumber, maxNumber);
  const generatedNum2 = generateRandomNumber(minNumber, maxNumber);
  const question = setQuestion(generatedNum1, generatedNum2);
  const correctAnswer = findGcd(generatedNum1, generatedNum2).toString();

  return [gameRules, question, correctAnswer];
};

export default setGameGcdData;
