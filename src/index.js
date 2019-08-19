import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const getQuestion = (task) => car(task);
const getTrueAnswer = (task) => cdr(task);

const game = (rules, createTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n `);
  for (let roundCount = 0; roundCount < 3; roundCount += 1) {
    const task = createTask();
    const question = getQuestion(task);
    const trueAnswer = getTrueAnswer(task);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === String(trueAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer. Correct answer was "${trueAnswer}"\nLet's try again, ${userName}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default game;
