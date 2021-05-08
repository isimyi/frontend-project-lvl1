import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;
const setQuestion = (number) => `Question: ${number}`;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const setGameEvenData = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const generatedNumber = getRandomNumber();
  const question = setQuestion(generatedNumber);
  const correctAnswer = getCorrectAnswer(generatedNumber);

  return [gameRules, question, correctAnswer];
};

export default setGameEvenData;
