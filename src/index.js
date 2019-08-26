import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getQuestion = (task) => car(task);
const getTrueAnswer = (task) => cdr(task);
const roundsCount = 3;

const makeGame = (descriptionGame, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n `);
  let win = false;
  for (let i = 0; i < roundsCount; i += 1) {
    const task = createTask();
    const question = getQuestion(task);
    const trueAnswer = getTrueAnswer(task);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      win = true;
    } else {
      win = false;
      console.log(`\n"${userAnswer}" is wrong answer. Correct answer was "${trueAnswer}"`);
      break;
    }
  }
  if (win) {
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`Let's try again, ${userName}!`);
  return win;
};

export default makeGame;
