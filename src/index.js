import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getQuestion = (task) => car(task);
const getTrueAnswer = (task) => cdr(task);
const roundCount = 3;

const makeGame = (descriptionGame, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descriptionGame}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n `);
  for (let i = 0; i < roundCount; i += 1) {
    const task = createTask();
    const question = getQuestion(task);
    const trueAnswer = getTrueAnswer(task);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(trueAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer. Correct answer was "${trueAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default makeGame;
