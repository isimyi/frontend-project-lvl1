import readlineSync from 'readline-sync';

const gameRounds = 3;
const questionStart = 'Question: ';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

const playGame = (rules, gameData) => {
  const userName = getUserName();
  console.log(rules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(questionStart + question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
