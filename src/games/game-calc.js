import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const minArgNumber = 1;
const maxArgNumber = 100;
const mathOperators = ['+', '-', '*'];
const mathOperations = [
  (arg1, arg2) => arg1 + arg2,
  (arg1, arg2) => arg1 - arg2,
  (arg1, arg2) => arg1 * arg2,
];
const gameRules = 'What is the result of the expression?';

const generateExpression = () => {
  const arg1 = generateRandomNumber(minArgNumber, maxArgNumber);
  const arg2 = generateRandomNumber(minArgNumber, maxArgNumber);
  const indexOfOperation = generateRandomNumber(0, mathOperators.length - 1);
  const operationSymbol = mathOperators[indexOfOperation];
  const expression = `${arg1} ${operationSymbol} ${arg2}`;
  const getExpressionResult = mathOperations[indexOfOperation];
  const result = getExpressionResult(arg1, arg2).toString();

  return [expression, result];
};

const setGameCalcData = () => {
  const [expression, correctAnswer] = generateExpression();
  const question = `Question: ${expression}`;

  return [question, correctAnswer];
};

const playGameCalc = () => {
  playGame(gameRules, setGameCalcData);
};

export default playGameCalc;
