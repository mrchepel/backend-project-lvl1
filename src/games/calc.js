import { cons } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const operators = '+-*';
const gameDescription = 'What is the result of the expression?';

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const generateData = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = calculate(x, y, operator);
  const question = `${x} ${operator} ${y}`;
  return cons(question, String(answer));
};

export default () => makeGame(gameDescription, generateData);
