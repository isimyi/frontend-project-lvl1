import readlineSync from 'readline-sync';

let userName = 'anonymous';
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
const gameRounds = 3;

const isEven = (number) => number % 2 === 0;
const setQuestion = (number) => console.log(`Question: ${number}`);
const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = () => {
  const min = 0;
  const max = 10000;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGameData = () => {
  const generatedNumber = getRandomNumber();
  const correctAnswer = getAnswer(generatedNumber);

  setQuestion(generatedNumber);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

  return [userAnswer, correctAnswer];
};

const runGameEven = () => {
  let winsCount = 0;

  greetUser();
  console.log(gameRules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [userAnswer, correctAnswer] = getGameData();

    if (userAnswer === correctAnswer) {
      winsCount += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}`);
      break;
    }
  }

  if (winsCount === gameRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGameEven;
