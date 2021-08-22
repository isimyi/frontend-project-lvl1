import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const maxDivisor = Math.floor(Math.sqrt(number));

  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const generateGamePrimeData = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = getCorrectAnswer(number);

  return [number, correctAnswer];
};

const playGamePrime = () => {
  playGame(gameRules, generateGamePrimeData);
};

export default playGamePrime;
