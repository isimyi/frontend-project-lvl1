import readlineSync from 'readline-sync';

const gameRounds = 3;

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const playGame = (gameData) => {
  let winsCount = 0;
  const userName = getUserName();
  const [gameRules] = gameData();
  console.log(gameRules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [, question, correctAnswer] = gameData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      winsCount += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (winsCount === gameRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
