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

const generateExpression = (operand1, operand2, operationSymbol) => `${operand1} ${operationSymbol} ${operand2}`;

const setGameCalcData = () => {
  const operand1 = generateRandomNumber(minArgNumber, maxArgNumber);
  const operand2 = generateRandomNumber(minArgNumber, maxArgNumber);
  const indexOfOperation = generateRandomNumber(0, mathOperators.length - 1);
  const operationSymbol = mathOperators[indexOfOperation];
  const expression = generateExpression(operand1, operand2, operationSymbol);

  const getExpressionResult = mathOperations[indexOfOperation];
  const expressionResult = getExpressionResult(operand1, operand2).toString();

  const question = `Question: ${expression}`;

  return [question, expressionResult];
};

const playGameCalc = () => {
  playGame(gameRules, setGameCalcData);
};

export default playGameCalc;
