import readlineSync from 'readline-sync';

const roundsCount = 3;
const questionStart = 'Question: ';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const playGame = (gameInstruction, initializeGame) => {
  const userName = getUserName();
  console.log(gameInstruction);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = initializeGame();
    console.log(questionStart + question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
