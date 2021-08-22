import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';
const minOperandNumber = 1;
const maxOperandNumber = 100;
const mathOperations = [
  { '+': (operand1, operand2) => operand1 + operand2 },
  { '-': (operand1, operand2) => operand1 - operand2 },
  { '*': (operand1, operand2) => operand1 * operand2 },
];

const generateExpression = (operand1, operand2, operationSymbol) => `${operand1} ${operationSymbol} ${operand2}`;

const setGameCalcData = () => {
  const operand1 = generateRandomNumber(minOperandNumber, maxOperandNumber);
  const operand2 = generateRandomNumber(minOperandNumber, maxOperandNumber);
  const indexOfOperation = generateRandomNumber(0, mathOperations.length - 1);
  const operationSymbol = Object.keys(mathOperations[indexOfOperation]);
  const expression = generateExpression(operand1, operand2, operationSymbol);
  const calculateExpressionResult = mathOperations[indexOfOperation][operationSymbol];

  const expressionResult = calculateExpressionResult(operand1, operand2).toString();

  const question = `Question: ${expression}`;

  return [question, expressionResult];
};

const playGameCalc = () => {
  playGame(gameRules, setGameCalcData);
};

export default playGameCalc;
