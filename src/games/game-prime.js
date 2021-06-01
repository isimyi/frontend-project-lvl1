import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNumber = (number) => {
  const maxDivisor = Math.floor(Math.sqrt(number));

  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = (number) => (checkPrimeNumber(number) ? 'yes' : 'no');

const setGamePrimeData = () => {
  const number = generateRandomNumber(1, 100);
  const question = `Question: ${number}`;
  const correctAnswer = getCorrectAnswer(number);

  return [question, correctAnswer];
};

const playGamePrime = () => {
  playGame(gameRules, setGamePrimeData);
};

export default playGamePrime;
