import getRandomNumber from '../utils.js';

const minArgNumber = 1;
const maxArgNumber = 100;
const mathOperators = ['+', '-', '*'];
const mathOperations = [
  (arg1, arg2) => arg1 + arg2,
  (arg1, arg2) => arg1 - arg2,
  (arg1, arg2) => arg1 * arg2,
];

const generateExpression = () => {
  const arg1 = getRandomNumber(minArgNumber, maxArgNumber);
  const arg2 = getRandomNumber(minArgNumber, maxArgNumber);
  const indexOfOperation = getRandomNumber(0, mathOperators.length - 1);
  const operationSymbol = mathOperators[indexOfOperation];
  const expression = `${arg1} ${operationSymbol} ${arg2}`;
  const getExpressionResult = mathOperations[indexOfOperation];
  const result = getExpressionResult(arg1, arg2).toString();

  return [expression, result];
};

const setGameCalcData = () => {
  const gameRules = 'What is the result of the expression?';
  const [expression, correctAnswer] = generateExpression();
  const question = `Question: ${expression}`;

  return [gameRules, question, correctAnswer];
};

export default setGameCalcData;
