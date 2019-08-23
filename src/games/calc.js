import { cons, car, cdr } from '@hexlet/pairs';
import getRandomNumber from '../getRandomNumber';
import makeGame from '..';

const getOperator = (expression) => car(expression);
const getResult = (expression) => cdr(expression);
const listOperators = '+-*';
const descriptionGame = 'What is the result of the expression?';

const getCalculation = (x, y, operator) => {
  switch (operator) {
    case '+':
      return cons('+', x + y);
    case '-':
      return cons('-', x - y);
    case '*':
      return cons('*', x * y);
    default:
      return null;
  }
};

const checkResultExpression = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const operator = listOperators[getRandomNumber(0, listOperators.length - 1)];
  const expression = getCalculation(x, y, operator);
  const question = `${x} ${getOperator(expression)} ${y}`;
  const answer = getResult(expression);
  return cons(question, answer);
};

export default () => makeGame(descriptionGame, checkResultExpression);
